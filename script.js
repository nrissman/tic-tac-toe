// indicator to keep track of player turn
//changes turn by switching value of token 
let playerTurn = true
//keep track of turns to end game in tie 
let turns = 0 
let gameVictor = false


let endGame= document.getElementById('winner')
let b1= document.getElementById('b1')
let b2= document.getElementById('b2')
let b3= document.getElementById('b3')
let b4= document.getElementById('b4')
let b5= document.getElementById('b5')
let b6= document.getElementById('b6')
let b7= document.getElementById('b7')
let b8= document.getElementById('b8')
let b9= document.getElementById('b9')

let truthArray = [true, true, true, true, true, true, true, true, true]

b1.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
        if (truthArray[0] === true){
            if (playerTurn === true){
                console.log('helllo')
                b1.innerText = ('X')  
                playerTurn = false
            }else if (playerTurn === false){
                b1.innerText = ('O')
                playerTurn = true  
            } 
            turns = turns +1
            truthArray[0] = false
        }   checkWin ()
    }
   
    
      
})

b2.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
        if (truthArray[1] === true){
            if (playerTurn === true){
                console.log('helllo')
                b2.innerText = ('X')  
                playerTurn = false
            }else if (playerTurn === false){
                b2.innerText = ('O')
                playerTurn = true
            } 
            turns = turns +1
            truthArray[1] = false
        }   checkWin ()   
    }
    
    
})

b3.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[2] === true){
        if (playerTurn === true){
            console.log('helllo')
            b3.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b3.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[2] = false
    }   checkWin ()
}
})

b4.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[3] === true){
        if (playerTurn === true){
            console.log('helllo')
            b4.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b4.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[3] = false
    }   checkWin ()
}
})

b5.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[4] === true){
        if (playerTurn === true){
            console.log('helllo')
            b5.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b5.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[4] = false
    }   checkWin ()
}
})

b6.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[5] === true){
        if (playerTurn === true){
            console.log('helllo')
            b6.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b6.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[5] = false
    }   checkWin ()
}
})

b7.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[6] === true){
        if (playerTurn === true){
            console.log('helllo')
            b7.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b7.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[6] = false
    }   checkWin ()
}
})

b8.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[7] === true){
        if (playerTurn === true){
            console.log('helllo')
            b8.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b8.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[7] = false
    }   checkWin ()
}
})

b9.addEventListener('click', function (event){
    if (endGame.innerText!= 'Player O HAS WON!' && (gameVictor != true) || 'PLAYER X HAS WON!' && (gameVictor != true)){
    if (truthArray[8] === true){
        if (playerTurn === true){
            console.log('helllo')
            b9.innerText = ('X')  
            playerTurn = false
        }else if (playerTurn === false){
            b9.innerText = ('O')
            playerTurn = true
        } 
        turns = turns +1
        truthArray[8] = false
    }   checkWin ()
}
})


function checkWin (){
    if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
        b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
        b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
        b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
        b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
        b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
    ){
        if (playerTurn == true) {
            endGame.innerText = 'Player O HAS WON!'
            gameVictor = true
        }   else{ 
            endGame.innerText = 'Player X HAS WON!'
                gameVictor = true
        }
        //document.getElementById("winner").innerText = "Player ${} has won!"
        //endGame.innerText = 'WINNER WINNER CHICKEN DINNER PLAYER `${} HAS WON!'
        //console.log("Winner, Winner, Chicken Dinner!")

    }
        if (turns === 9) {
            document.getElementById("winner").innerText = "It's a Tie. Click Restart Game to play again!"
        } if (turns === 1) {
            document.getElementById("playerturn").innerText = "Player O Turn"
        } if (turns === 2) {
            document.getElementById("playerturn").innerText = "Player X Turn"
        } if (turns === 3) {
            document.getElementById("playerturn").innerText = "Player O Turn"
        } if (turns === 4) {
            document.getElementById("playerturn").innerText = "Player X Turn"
        } if (turns === 5) {
            document.getElementById("playerturn").innerText = "Player O Turn"
        } if (turns === 6) {
            document.getElementById("playerturn").innerText = "Player X Turn"
        } if (turns === 7) {
            document.getElementById("playerturn").innerText = "Player O Turn"
        } if (turns === 8) {
            document.getElementById("playerturn").innerText = "Player X Turn"
        } 
}




restart.addEventListener('click', function (event){
   location.reload()
})