
// ØV5 - LocalStorage 

let buttonSubmit = document.querySelector(".input__submit");
let buttonClear = document.querySelector(".input__clear");
let localStorageKey = "name";
let inputElement = document.forms.form.input;
loadLocalStorage(localStorageKey);

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    let inputValue = inputElement.value;
    // console.log(inputValue);
    document.querySelector(".return-message").remove();
    returnMessage(inputValue);
    saveToLocalStorage(inputValue)
})

buttonClear.addEventListener('click', (event) => {
    event.preventDefault();
    clearLocalStorage();
    returnMessage("LocalStorage er tom")
})

function saveToLocalStorage(string) {
    localStorage.setItem(localStorageKey, string);
}

function loadLocalStorage(key){
    if((localStorage[key] != "") && (localStorage.length > 0)) {
        let keyValue = localStorage.getItem(key);
        returnMessage(keyValue);
    } else {
        returnMessage("skriv dit navn i feltet");
    }
}

function clearLocalStorage() {
    document.querySelector(".return-message").remove();
    localStorage.removeItem(localStorageKey);
}

function returnMessage(input){
    let div = document.createElement("div");
    inputElement.value = "";
    div.className = "return-message"
    div.insertAdjacentHTML('afterbegin', input);
    document.querySelector(".body").appendChild(div);
}
