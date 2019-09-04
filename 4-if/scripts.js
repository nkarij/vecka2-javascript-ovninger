
// ØV4 - IF

let buttonSubmit = document.querySelector(".submit");

buttonSubmit.addEventListener('click', function(event){
    event.preventDefault();
    let inputValue = document.querySelector('input').value;
    if(isNaN(inputValue) || inputValue.length == "") {
        returnMessage("du skal skrive et tal");
    } else {
        evaluateAge(inputValue);
    }
})

function evaluateAge(input){
    if(input < 18){
        returnMessage("Du er for ung")
        } else if(input >= 19 && input <= 69) {
            returnMessage("Du har en passende alder")
            } else if(input > 69) {
                returnMessage("Du er for gammel")
            }
}

function returnMessage(input){
    let paragraph = document.createElement("p");
    paragraph.insertAdjacentHTML('afterbegin', input);
    document.querySelector(".body").appendChild(paragraph);
}
