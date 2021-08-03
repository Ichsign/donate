import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import * as utils from "../core/utils";

export default class App {
    #donateForm;
    #donateList;
    #body;

    constructor() {
        const mockDonates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 1, date: new Date() },
        ];

        this.state = {
            donates: mockDonates,
            totalAmount: utils.calculateSumOfNumbers(this.#extractAmounts(mockDonates))
        }
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(this.state.donates);
        this.#body = document.querySelector('body');
    }

    #extractAmounts(array) {
        return array.map(elem => parseInt(elem.amount));
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate);
        this.state.totalAmount = utils.calculateSumOfNumbers(this.#extractAmounts(this.state.donates));
        this.#donateList.updateDonates(this.state.donates);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
    }

    run() {
        // document.body.textContent = 'Hello World';
        this.#body.append(this.#donateForm.render());
        this.#body.append(this.#donateList.render());
    }
}
