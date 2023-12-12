//nome da nave
let spaceshipName= prompt ("Digite o nome da name ") 
// velocidade da nave 
let spaceshipVelocity = 0
// opçoes para usuario
let chosenOption
// mostar menu
function showMenu() {
    let option
    while (option!="1" && option != "2" && option != "3" && option != "4"  ) {// enquanto for diferente de 1  a 4 retornara para o menu(escolha de 1 a 4)
        option = prompt ("O que deseja fazer?\n" +
                          "1-acelerar a nave em 5km/s\n"+
                          "2-desacelerar a nave em 5km/s\n"+
                          "3-imprimir dados de bordo\n"+
                          "4-Sair de programa" )
    }
    return option
}
function speedUp (velocity){// funaçao  acelerar vamos acelerar 5 e retornar  na variavel nova velocidade
let newVelocity = velocity + 5
 return newVelocity
}
function slowDown(velocity){//fuçao desacelerar 5 e colocar na variavel nova velocidade , SI nova velocidade for menor que 0 ,nova velocidade e igual = 0
    let newVelocity = velocity - 5
    if (newVelocity < 0){
       newVelocity = 0
    }
    return newVelocity
}   //imprimir dados da placa da nave espacial
function printSpaceshipBoardData(name, velocity){  //funçao imprimir dados da placa da nave espacial , nome e velocidade
      alert("Espaçonave :"+name+ "\nVelocidade :" + velocity+ "km/s") 
}
  //faça
do {   
    chosenOption = showMenu()
  switch(chosenOption){
   case "1":
    spaceshipVelocity= speedUp(spaceshipVelocity)
     break    
      case "2":     
    spaceshipVelocity = slowDown(spaceshipVelocity)       
         break
     case "3" :
        //imprimir dados da placa da nave espacial
      printSpaceshipBoardData(spaceshipName,spaceshipVelocity) 
       break
       default:
        alert("encerrando programa de bordo")    
    }  
  
}while (chosenOption != "4" )// emquanto for diferente de 4