let fighter = ["✊", "✌️", "✋"]
let random = Math.floor(Math.random()*fighter.length)
//console.log(fighter[random])

let rockEL = document.getElementById("rock-el")
let sciscorEL = document.getElementById("sciscor-el")
let paperEL = document.getElementById("paper-el")
let rps =""


function rock() {
    let message = ""
    let mineEl = document.getElementById("mine")
    let fighter = ["✊", "✌️", "✋"]
    let fr = fighter[random];
    
    mineEl.innerHTML = fighter[0] + " " + "vs" + " " + fr;
    if (fr == fighter[0]) {
        message = "Its a Tie 😁"
    }
    else if(fr == fighter[1]){
        message = "You won the match 😍"
    }
    else{
        message = "You lost the match 😞"
    }
    document.getElementById("result").innerHTML = message;  
}



function scis(){
    let message = ""
    let mineEl = document.getElementById("mine")
    let fighter = ["✊", "✌️", "✋"]
    let fr = fighter[random];
    
    mineEl.innerHTML = fighter[1] + " " + "vs" + " " + fr;
    if (fr == fighter[1]) {
        message = "Its a Tie 😁"
    }
    else if(fr == fighter[2]){
        message = "You won the match 😍"
    }
    else{
        message = "You lost the match 😞"
    }
    document.getElementById("result").innerHTML = message; 
}


function paper() {
    let message = ""
    let mineEl = document.getElementById("mine")
    let fighter = ["✊", "✌️", "✋"]
    let fr = fighter[random];
    
    mineEl.innerHTML = fighter[2] + " " + "vs" + " " + fr;
    if (fr == fighter[2]) {
        message = "Its a Tie 😁"
    }
    else if(fr == fighter[0]){
        message = "You won the match 😍"
    }
    else{
        message = "You lost the match 😞"
    }
    document.getElementById("result").innerHTML = message; 
   
}
function refresh(){
    location.reload()
}