interface IEntrada {
    getCampos(): HTMLFormElement;
}

interface IDatosEntrada {
    getLabel(): HTMLLabelElement;
    getInput(): HTMLInputElement;
}

class InputEntrada implements IDatosEntrada {
    constructor(
        public id: string,
        public label: string, 
        public type: string, 
        public min: number = 0, 
        public max: number = 0) {}

    getInput(): HTMLInputElement {
        const input = document.createElement("input");
        input.setAttribute("id", this.id);
        input.setAttribute("type", this.type);
        input.classList.add("form-control");
        if (this.type == "number" && this.min != this.max) {
            input.setAttribute("min", `${this.min}`);
            input.setAttribute("max", `${this.max}`);
        }
        return input;
    }

    getLabel(): HTMLLabelElement {
        const label = document.createElement("label");
        label.setAttribute("for", this.id);
        label.textContent = this.label;
        return label;
    }
}

class SelectEntrada implements IDatosEntrada {
    constructor(
        public id: string,
        public label: string,
        public defaultOptionText: string,
        public options: string[]
    ){}

    getLabel(): HTMLLabelElement {
        const label = document.createElement("label");
        label.setAttribute("for", this.id);
        label.textContent = this.label;
        return label;
    }
    getInput(): HTMLInputElement {
        const input = document.createElement("input");
        input.setAttribute("id", this.id);
        input.classList.add("form-select");
        const defaultOption = document.createElement("option");
        defaultOption.setAttribute("selected", "true");
        defaultOption.textContent = this.defaultOptionText;
        input.append(defaultOption);
        for (let i = 0; i < this.options.length; i++) {
            const option = document.createElement("option");
            option.setAttribute("value", `${i}`);
            option.textContent = this.options[i]!!;
            input.append(option);
        }   
        return input;
    }
    
}

// things EntradaExtendida needs to do:
// 1. create the div for the control with row and mb-3
// 2. append the label to the control div
// 3. create the div for the input with col-sm-[whatever]
// 4. append the input to the input div
// 5. add the relevant classes to the label (col-form-label, col-sm-[12 - whatever])

// tings EntradaReducida needs to do:
// 1. create the div for the control with form-floating and mb-3
// 2. append the input
// 3. add the placeholder to the input
// 3. append the label

