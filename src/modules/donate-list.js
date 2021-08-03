import { SETTINGS as settings } from "../core/constants/SETTINGS";
import * as utils from "../core/utils";

class DonateList {
    #donates;
    #months;
    constructor(donates) {
        this.#donates = donates;
        this.#months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    }

    updateDonates(updatedDonates) {
        const donates = document.querySelector('.donates-container__donates');
        donates.innerHTML = '';
        this.#fillContainer(donates, updatedDonates);
    }

    #createHeader() {
        const header = document.createElement('h2');
        header.className = 'donates-container__title';
        header.textContent = 'Список донатов';
        return header;
    }

    #createItem({ date, amount }) {
        const item = document.createElement('div');
        item.className = 'donate-item';
        item.textContent = `${utils.getFormattedTime(date)} - `;
        const price = document.createElement('b');
        price.textContent = `${amount}${settings.currency}`;
        item.append(price)
        return item;
    }

    #fillContainer(container, array) {
        array.forEach((element) => {
            container.append(this.#createItem(element));
        })
    }

    #createItemsContainer(array) {
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'donates-container__donates';

        this.#fillContainer(itemsContainer, array);
        return itemsContainer;
    }

    render() {
        const container = document.createElement('div');
        container.className = 'donates-container';
        container.append(this.#createHeader());
        container.append(this.#createItemsContainer(this.#donates));
        return container;
    }
}

export { DonateList };
