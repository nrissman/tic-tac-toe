



// indicator to keep track of player turn
//changes turn by switching value of token 
let playerTurn = true
//keep track of turns to end game in tie 
let turns = 0 
const gameFlow = ['playerx', 'playero', 'playerx', 'playero', 'playerx', 'playero', 'playerx', 'playero', 'playerx']
//define color for reset 
const unClaimedColor = 'rgb(225, 0, 0)'
//define player one blue 
const player1color = 'rgb(0, 0, 225)'
//define player two green
const player2color = 'rgb(0, 225, 0)'


let b1= document.getElementById('b1')
let b2= document.getElementById('b2')
let b3= document.getElementById('b3')
let b4= document.getElementById('b4')
let b5= document.getElementById('b5')
let b6= document.getElementById('b6')
let b7= document.getElementById('b7')
let b8= document.getElementById('b8')
let b9= document.getElementById('b9')

let playerToken= document.getElementById('playerToken')

// let restartButton= document.getElementsByClassName(button)

let truthArray = [true, true, true, true, true, true, true, true, true]

b1.addEventListener('click', function (event){
    if (truthArray[0] === true){
        if (playerTurn === true){
            console.log('helllo')
            b1.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b1.innerText = ('O')
            playerTurn = true  
        } 
        truthArray[0] = false
    } 
})

b2.addEventListener('click', function (event){
    if (truthArray[1] === true){
        if (playerTurn === true){
            console.log('helllo')
            b2.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b2.innerText = ('O')
            playerTurn = true
        } 
        truthArray[1] = false
    } 
})

b3.addEventListener('click', function (event){
    if (truthArray[2] === true){
        if (playerTurn === true){
            console.log('helllo')
            b3.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b3.innerText = ('O')
            playerTurn = true
        } 
        truthArray[2] = false
    } 
})

b4.addEventListener('click', function (event){
    if (truthArray[3] === true){
        if (playerTurn === true){
            console.log('helllo')
            b4.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b4.innerText = ('O')
            playerTurn = true
        } 
        truthArray[3] = false
    } 
})

b5.addEventListener('click', function (event){
    if (truthArray[4] === true){
        if (playerTurn === true){
            console.log('helllo')
            b5.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b5.innerText = ('O')
            playerTurn = true
        } 
        truthArray[4] = false
    } 
})

b6.addEventListener('click', function (event){
    if (truthArray[5] === true){
        if (playerTurn === true){
            console.log('helllo')
            b6.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b6.innerText = ('O')
            playerTurn = true
        } 
        truthArray[5] = false
    } 
})

b7.addEventListener('click', function (event){
    if (truthArray[6] === true){
        if (playerTurn === true){
            console.log('helllo')
            b7.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b7.innerText = ('O')
            playerTurn = true
        } 
        truthArray[6] = false
    } 
})

b8.addEventListener('click', function (event){
    if (truthArray[7] === true){
        if (playerTurn === true){
            console.log('helllo')
            b8.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b8.innerText = ('O')
            playerTurn = true
        } 
        truthArray[7] = false
    } 
})

b9.addEventListener('click', function (event){
    if (truthArray[8] === true){
        if (playerTurn === true){
            console.log('helllo')
            b9.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b9.innerText = ('O')
            playerTurn = true
        } 
        truthArray[8] = false
    } 
})

// function playerToken (){
//     if (gameFlow[turns] === 'playerx') {
//         emoji = '1️⃣'
//         playerToken.innerText = 'player two turn'
//     } else if (gameFlow[turns] === 'playero'){
//         emoji: = '2️⃣'
//         playerToken.innerText = ' player 1 turn'  
//     }

//     turn += 1
//}



// restartButton.addEventListener('click', function (event)){
//     if 
// }