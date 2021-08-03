class DonateForm {
    constructor(totalAmount, createNewDonate) {
        this.totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    }

    updateTotalAmount(newAmount) {
        const totalAmount = document.querySelector('#total-amount')
        totalAmount.textContent = `${newAmount}$`;
    }

    #createHeader() {
        const header = document.createElement('h1');
        header.id = 'total-amount';
        header.textContent = '28$';
        return header;
    }

    #createInputField() {
        const input = document.createElement('input');
        input.className = 'donate-form__donate-input';
        input.name = 'amount';
        input.type = 'number';
        input.max = '100';
        input.min = '0';
        input.setAttribute('required', '');
        return input;
    }

    #createLabel() {
        const label = document.createElement('label');
        label.className = 'donate-form__input-label';
        label.textContent = 'Введите сумму в $';
        label.append(this.#createInputField());
        return label;
    }

    #createConfirmButton() {
        const button = document.createElement('button');
        button.className = 'donate-form__submit-button';
        button.type = 'submit';
        button.textContent = 'Задонатить';
        return button;
    }

    #submitAction(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputField = form.querySelector('.donate-form__donate-input');
            const newDonate = {
                date: new Date(),
                amount: inputField.value
            }
            this.createNewDonate(newDonate);
            inputField.value = '';
        })
    }


    render() {
        const donateForm = document.createElement('form');
        donateForm.className = 'donate-form';
        donateForm.append(this.#createHeader());
        donateForm.append(this.#createLabel());
        donateForm.append(this.#createConfirmButton());
        this.#submitAction(donateForm);
        return donateForm;
    }
}

export { DonateForm }
