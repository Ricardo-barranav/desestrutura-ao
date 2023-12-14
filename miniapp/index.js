
//Data de partida Entrada
let departureDateEntry= prompt("Digite a data de partida(formato DD/MM/YYYY"); 

//Data de partida
let departureDate= moment (departureDateEntry,"DD/MM/YYYY")//a data de entrada vai vim em modo de string , aqui o moment vai vim tranformar em um formato que ele consiga trabalhar
//data de hoje
let today=moment()                          // vou chamar o moment vazio para ele me retornar a data atual

//diferença de data 
let dateDiff= today- departureDate
//opçao escolhida
let chosenOption = prompt ("Escolha como gostaria de exibir o tempo de partida\n1-segundos\n2-Minutos\n3-Horas\n4-Dias")

   if(chosenOption == 1){
     //segundos de partida  
    let secondsOfDeparture = Math.round (dateDiff/1000) //math.round aredonda o numero (para numeros quebrados)
    alert ("tempo de vôo : "+ secondsOfDeparture + "segundos")
   }
   else if(chosenOption == 2){
    let minutesOfDeparture =Math.round (dateDiff/1000/60)//1000 milesegundos,60 segundos
    alert("Tempo de vôo :" + minutesOfDeparture + "minutos")
   }
   else if(chosenOption == 3){
    let hoursOfDeparture = Math.round (dateDiff/1000/60/3600)//1000 milesegundos,60 segundos,3600 segundos
    alert("Tempo de vôo :" + hoursOfDeparture + "horas") 
   }
   else if(chosenOption == 4){
    let daysOfDeparture = Math.round (dateDiff/1000/60/3600/86.400)//1000 milesegundos,60 segundos,3600 segundos, 24 horas

    alert("Tempo de vôo :" +daysOfDeparture  + "dias")
   }
     else{
        alert ("opçao invalida")
     }