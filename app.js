const caseSelect = document.getElementById("caseSelect");
const contextoInput = document.getElementById("contexto");
const decisionInput = document.getElementById("decision");
const datosInput = document.getElementById("datos");
const restriccionesInput = document.getElementById("restricciones");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const output = document.getElementById("output");

let casosPrecargados = [];

document.addEventListener("DOMContentLoaded", () => {
  cargarCasos();
  caseSelect.addEventListener("change", autocompletarCaso);
  generateBtn.addEventListener("click", generarPromptFinal);
  copyBtn.addEventListener("click", copiarPrompt);
});

async function cargarCasos() {
  try {
    const response = await fetch("data/ejemplos.json");
    if (!response.ok) {
      throw new Error("No se pudieron cargar los casos.");
    }

    casosPrecargados = await response.json();
  } catch (error) {
    mostrarMensaje("No se han podido cargar los ejemplos precargados.", "error");
    console.error(error);
  }
}

function autocompletarCaso() {
  const casoSeleccionado = caseSelect.value;

  if (!casoSeleccionado) {
    limpiarFormulario(false);
    return;
  }

  const caso = casosPrecargados.find((item) => item.id === casoSeleccionado);

  if (!caso) {
    mostrarMensaje("No se encontró información para el caso seleccionado.", "error");
    return;
  }

  contextoInput.value = caso.contexto || "";
  decisionInput.value = caso.decision || "";
  datosInput.value = construirBloqueDatos(caso);
  restriccionesInput.value = construirBloqueRestricciones(caso);
  limpiarMensaje();
}

function construirBloqueDatos(caso) {
  const bloques = [];

  if (caso.datos_disponibles) {
    bloques.push(caso.datos_disponibles);
  }

  if (caso.metricas) {
    bloques.push(`Métricas o volumen básico: ${caso.metricas}`);
  }

  return bloques.join("\n\n");
}

function construirBloqueRestricciones(caso) {
  const bloques = [];

  if (caso.restricciones) {
    bloques.push(caso.restricciones);
  }

  if (caso.riesgo_principal) {
    bloques.push(`Riesgo principal: ${caso.riesgo_principal}`);
  }

  return bloques.join("\n\n");
}

function generarPromptFinal() {
  const caso = caseSelect.value.trim();
  const contexto = contextoInput.value.trim();
  const decision = decisionInput.value.trim();
  const datos = datosInput.value.trim();
  const restricciones = restriccionesInput.value.trim();

  if (!validarCampos(caso, contexto, decision, datos, restricciones)) {
    return;
  }

  if (typeof buildPrompt !== "function") {
    mostrarMensaje("La función buildPrompt no está disponible en prompts.js.", "error");
    return;
  }

  const promptFinal = buildPrompt(caso, contexto, decision, datos, restricciones);
  output.textContent = promptFinal;
  limpiarMensaje();
}

function validarCampos(caso, contexto, decision, datos, restricciones) {
  if (!caso) {
    mostrarMensaje("Selecciona uno de los cuatro casos antes de generar el prompt.", "error");
    return false;
  }

  if (!contexto || !decision || !datos || !restricciones) {
    mostrarMensaje("Completa contexto, decisión, datos disponibles y restricciones.", "error");
    return false;
  }

  return true;
}

async function copiarPrompt() {
  const texto = output.textContent.trim();

  if (!texto) {
    mostrarMensaje("Primero debes generar un prompt antes de copiarlo.", "error");
    return;
  }

  try {
    await navigator.clipboard.writeText(texto);
    mostrarMensaje("Prompt copiado al portapapeles.", "success");
  } catch (error) {
    mostrarMensaje("No se pudo copiar el prompt. Inténtalo de nuevo.", "error");
    console.error(error);
  }
}

function mostrarMensaje(texto, tipo) {
  limpiarMensaje();

  const mensaje = document.createElement("p");
  mensaje.className = tipo;
  mensaje.id = "statusMessage";
  mensaje.textContent = texto;

  output.insertAdjacentElement("beforebegin", mensaje);
}

function limpiarMensaje() {
  const mensajeAnterior = document.getElementById("statusMessage");
  if (mensajeAnterior) {
    mensajeAnterior.remove();
  }
}

function limpiarFormulario(limpiarSelector = true) {
  if (limpiarSelector) {
    caseSelect.value = "";
  }

  contextoInput.value = "";
  decisionInput.value = "";
  datosInput.value = "";
  restriccionesInput.value = "";
  output.textContent = "";
  limpiarMensaje();
}
