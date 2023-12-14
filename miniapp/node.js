const readlineSync = require('readline-sync');
const moment = require('moment');

// Data de partida Entrada
let departureDateEntry = readlineSync.question("Digite a data de partida (formato DD/MM/YYYY): ");

// Data de partida
let departureDate = moment(departureDateEntry, "DD/MM/YYYY");       

// Data de hoje
let today = moment();

// Diferença de data
let dateDiff = today - departureDate;

// Opção escolhida// esplicaçao para readlineSync = https://chat.openai.com/c/6d7fac2b-10a2-4272-95fb-93ad6650955b
let chosenOption = readlineSync.question("Escolha como gostaria de exibir o tempo de partida\n1-segundos\n2-Minutos\n3-Horas\n4-Dias: ");

if (chosenOption == 1) {
    // Segundos de partida
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    console.log("Tempo de vôo: " + secondsOfDeparture + " segundos");
} else if (chosenOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    console.log("Tempo de vôo: " + minutesOfDeparture + " minutos");
} else if (chosenOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 60 / 60);
    console.log("Tempo de vôo: " + hoursOfDeparture + " horas");
} else if (chosenOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 60 / 60 / 24);
    console.log("Tempo de vôo: " + daysOfDeparture + " dias");
} else {
    console.log("Opção inválida");
}
