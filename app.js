'use strict';

let body = document.body;
console.log(body);

let ecran = document.querySelector("#ecran");
console.log(ecran);

let nb = 0;
let operator = "";
let virgule = false;

function afficheNumber(event) {
    let currentButton = event.target;
    console.log(currentButton.textContent);
    if(currentButton.textContent === "AC") {
       ecran.textContent = "";
       virgule = false;
    }
    else if(Number(currentButton.textContent) <= 9) {
        ecran.textContent += currentButton.textContent;
    }
    else if(currentButton.textContent === ".") {
        if(!virgule) {
            ecran.textContent += currentButton.textContent;
            virgule = true;
        }
    }
    else if(currentButton.textContent === "=") {
        if(operator === "+") {
            ecran.textContent = nb + Number(ecran.textContent);
        }
        else if(operator === "-") {
            ecran.textContent = nb - Number(ecran.textContent);
        }
        else if(operator === "x") {
            ecran.textContent = nb * Number(ecran.textContent);
        }
        else{
            ecran.textContent = nb / Number(ecran.textContent);
        }
        nb = 0;
        operator = "";
    }
    else {
        operator = currentButton.textContent;
        nb = Number(ecran.textContent);
        ecran.textContent = "";
        virgule = false;
    }
}

calculator.addEventListener("click", afficheNumber);

