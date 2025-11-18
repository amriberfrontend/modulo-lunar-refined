import * as Entrada from "./entrada.js";
const formularioCard = document.getElementById("formulario");
const datosEntrada = [
    new Entrada.InputEntrada("identificador", "Identificador", "text"),
    new Entrada.InputEntrada("identificador", "Identificador", "text")
];
const entrada = new Entrada.EntradaFactory().generarEntrada(datosEntrada, true);
formularioCard.append(entrada.getFormulario());
//# sourceMappingURL=index.js.map