const persona = {
   nombre: prompt("Ingrese su nombre:"),
   genero: prompt("Ingrese su género:"),
   edad: parseInt(prompt("Ingrese su edad:")),
   pais: prompt("Ingrese su país:"),
};
const mensajePersona =
   `Información ingresada:\n\n` +
   `Nombre: ${persona.nombre}\n` +
   `Género: ${persona.genero}\n` +
   `Edad: ${persona.edad}\n` +
   `País: ${persona.pais}`;
// traer el div ,por id, del html
const resultadoPersona = document.getElementById("resultadoPersona");
resultadoPersona.textContent = mensajePersona;
const altitudes = [1000, 2000, 3000, 4000, 5000];
const presiones = [1013, 950, 890, 830, 770];
const sintomas = [
   "No se esperan síntomas de mal de altura.",
   "Posibles síntomas leves de mal de altura.",
   "Posibles síntomas leves de mal de altura.",
   "Posibles síntomas leves de mal de altura.",
   "Pueden aparecer síntomas severos de mal de altura. Consulte a un médico."
];
const altitudIngresada = parseFloat(prompt("(Antes de escalar el Aconcagua). Ingrese la altitud a la que desea llegar en metros (1000 a 5000):"));
const encontrarIndiceAltitud = () => {
   for (let i = 0; i < altitudes.length; i++) {
      if (altitudIngresada <= altitudes[i]) {
         return i;
      }
   }
   return -1;
};
const indiceAltitud = encontrarIndiceAltitud();
// traer el div ,por id, del html
const resultadoAltitud = document.getElementById("resultadoAltitud");
if (indiceAltitud === -1) {
   resultadoAltitud.textContent = "Altitud fuera del rango de datos.";
} else {
   const presionAtmosferica = presiones[indiceAltitud];
   const sintoma = sintomas[indiceAltitud];
   resultadoAltitud.textContent = `Información para altitud ${altitudIngresada} metros:\n\n` +
      `Presión atmosférica: ${presionAtmosferica} hPa\n` +
      `Síntomas: ${sintoma}`;
}
const rutas = [
   { distancia: 1, altitudMaxima: 1000, velocidadPromedio: 4, recursos: "Equipo básico" },
   { distancia: 2, altitudMaxima: 2000, velocidadPromedio: 3.5, recursos: "Equipo básico" },
   { distancia: 3, altitudMaxima: 3000, velocidadPromedio: 3, recursos: "Equipo intermedio" },
   { distancia: 4, altitudMaxima: 4000, velocidadPromedio: 2.5, recursos: "Equipo de alta montaña y oxígeno" },
   { distancia: 5, altitudMaxima: 5000, velocidadPromedio: 2, recursos: "Equipo de alta montaña y oxígeno" }
];
const rutaSeleccionada = rutas.find(ruta => altitudIngresada <= ruta.altitudMaxima);
if (!rutaSeleccionada) {
   resultadoRuta.textContent = "No se encontró una ruta adecuada para la altitud ingresada.";
} else {
   const estimacion = estimarTiempoRecursos(rutaSeleccionada);
   resultadoRuta.textContent = `Estimación para Ruta:\n\n` +
      `Altitud deseada: ${altitudIngresada} metros\n` +
      `Ruta asignada: ${rutas.indexOf(rutaSeleccionada) + 1}\n` +
      `Distancia: ${rutaSeleccionada.distancia} km\n` +
      `Tiempo estimado: ${estimacion.tiempo} horas\n` +
      `Recursos necesarios: ${estimacion.recursos}`;
}
function estimarTiempoRecursos(ruta) {
   const tiempoEstimado = ruta.distancia / ruta.velocidadPromedio;
   return {
      tiempo: tiempoEstimado.toFixed(2),
      recursos: ruta.recursos
   };
}
// cree un buttom que al tocarlo reinicie la pagina, y cree un contador de las veces que toque el boton y se almacene em el LocalStorage
const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "Reiniciar Programa";
document.body.appendChild(botonReiniciar);
botonReiniciar.addEventListener("click", () => {
   // Incrementar el contador o inicializarlo si es la primera vez
   let contador = localStorage.getItem("contador");
   if (contador === null) {
      contador = 1;
   } else {
      contador = parseInt(contador) + 1;
   }
   // Guardar el contador en el almacenamiento local
   localStorage.setItem("contador", contador);
   // Reiniciar el programa recargando la página
   location.reload();
});


