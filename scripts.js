
// ØV1 - MANIPULERA DOM
// Det kan gøres på mange måder, idag har jeg valgt denne.

let divElement = document.createElement("div");
let paraElement = document.createElement("p");
paraElement.insertAdjacentText('afterbegin', "Nanna Kari Jensen");
divElement.insertAdjacentElement('afterbegin', paraElement);
document.querySelector(".body").appendChild(divElement);

// ØV1 - MANIPULERA DOM -DEL 2
let newDivElement = document.createElement("div");
document.querySelector(".body").appendChild(newDivElement);

let array = ["lave mad", "sejle", "sove", "hygge"];

array.forEach(item => {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(item);
    paragraph.appendChild(textNode);
    newDivElement.appendChild(paragraph);
})

