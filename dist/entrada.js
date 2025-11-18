export class InputEntrada {
    id;
    label;
    type;
    min;
    max;
    maxLength;
    constructor(id, label, type, min = 0, max = 0, maxLength = 0) {
        this.id = id;
        this.label = label;
        this.type = type;
        this.min = min;
        this.max = max;
        this.maxLength = maxLength;
    }
    getInput() {
        const input = document.createElement("input");
        input.setAttribute("id", this.id);
        input.setAttribute("type", this.type);
        input.classList.add("form-control");
        if (this.type == "number" && this.min != this.max) {
            input.setAttribute("min", `${this.min}`);
            input.setAttribute("max", `${this.max}`);
        }
        if (this.maxLength > 0) {
            input.setAttribute("maxLenght", `${this.maxLength}`);
        }
        return input;
    }
    getLabel() {
        const label = document.createElement("label");
        label.setAttribute("for", this.id);
        label.textContent = this.label;
        return label;
    }
}
export class SelectEntrada {
    id;
    label;
    defaultOptionText;
    options;
    constructor(id, label, defaultOptionText, options) {
        this.id = id;
        this.label = label;
        this.defaultOptionText = defaultOptionText;
        this.options = options;
    }
    getLabel() {
        const label = document.createElement("label");
        label.setAttribute("for", this.id);
        label.textContent = this.label;
        return label;
    }
    getInput() {
        const input = document.createElement("select");
        input.setAttribute("id", this.id);
        input.classList.add("form-select");
        const defaultOption = document.createElement("option");
        defaultOption.setAttribute("selected", "true");
        defaultOption.textContent = this.defaultOptionText;
        input.append(defaultOption);
        for (let i = 0; i < this.options.length; i++) {
            const option = document.createElement("option");
            option.setAttribute("value", `${i}`);
            option.textContent = this.options[i];
            input.append(option);
        }
        return input;
    }
}
export class TextAreaEntrada {
    id;
    label;
    rows;
    maxLength;
    cols;
    constructor(id, label, rows = 0, maxLength = 0, cols = 0) {
        this.id = id;
        this.label = label;
        this.rows = rows;
        this.maxLength = maxLength;
        this.cols = cols;
    }
    getLabel() {
        const label = document.createElement("label");
        label.setAttribute("for", this.id);
        label.textContent = this.label;
        return label;
    }
    getInput() {
        const input = document.createElement("textarea");
        input.setAttribute("id", this.id);
        input.classList.add("form-control");
        if (this.rows > 0) {
            input.setAttribute("rows", `${this.rows}`);
        }
        if (this.maxLength > 0) {
            input.setAttribute("maxLenght", `${this.maxLength}`);
        }
        if (this.cols > 0) {
            input.setAttribute("cols", `${this.cols}`);
        }
        return input;
    }
}
// things EntradaExtendida needs to do:
// [X] 1. create the div for the control with row and mb-3
// [X] 2. add the relevant classes to the label (col-form-label, col-sm-[12 - whatever])
// [X] 3. append the label to the control div
// [X] 4. create the div for the input with col-sm-[whatever]
// [X] 5. append the input to the input div
export class EntradaExtendida {
    campos;
    constructor(campos) {
        this.campos = campos;
    }
    getFormulario() {
        const formulario = document.createElement("form");
        for (const campo of this.campos) {
            const controlDiv = document.createElement("div");
            controlDiv.classList.add("row", "mb-3");
            formulario.append(controlDiv);
            const label = campo.getLabel();
            label.classList.add("col-form-label", "col-sm-3", "text-end");
            label.textContent += ":";
            controlDiv.append(label);
            const inputDiv = document.createElement("div");
            inputDiv.classList.add("col-sm-9");
            controlDiv.append(inputDiv);
            inputDiv.append(campo.getInput());
        }
        return formulario;
    }
}
// tings EntradaReducida needs to do:
// [X] 1. create the div for the control with form-floating and mb-3
// [X] 2. add the placeholder to the input
// [X] 3. append the input
// [X] 4. append the label
export class EntradaReducida {
    campos;
    constructor(campos) {
        this.campos = campos;
    }
    getFormulario() {
        const formulario = document.createElement("form");
        for (const campo of this.campos) {
            const controlDiv = document.createElement("div");
            controlDiv.classList.add("form-floating", "mb-3", "col-6");
            formulario.append(controlDiv);
            const input = campo.getInput();
            input.setAttribute("placeholder", campo.label);
            controlDiv.append(input);
            controlDiv.append(campo.getLabel());
        }
        return formulario;
    }
}
export class EntradaFactory {
    /**
     *
     * @param datosEntrada Lista de [IDatosEntrada] de los campos a generar
     * @param reducida Si la [IEntrada] es reducida (con placeholder) o no
     * @returns La [IEntrada] para generar el formulario
     */
    generarEntrada(datosEntrada, reducida) {
        if (reducida) {
            return new EntradaReducida(datosEntrada);
        }
        else {
            return new EntradaExtendida(datosEntrada);
        }
    }
}
//# sourceMappingURL=entrada.js.map