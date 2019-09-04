
// ØV2 - FUNKTIONER

let buttonSubmit = document.querySelector(".submit");
let textInput = document.querySelector(".input");

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let upperCaseString = capitalizeInput(textInput.value);
    // returnOutput er unødvendig, men bra practice :=)
    returnOutput(upperCaseString);
})

function capitalizeInput(string){
    let output = string.toUpperCase();
    return output;
}

function returnOutput(string) {
    textInput.value = string;
}