
// ØV3 - LOOP

let array = ["film", "blæsevejr", "javascript", "serier", "svømning"];

let list = document.createElement("ul");
list.insertAdjacentText('afterbegin', "Liste");

for (index = 0; index < array.length; index++) {
    const arrayItem = array[index];   
    let listItem = "<li>" + arrayItem + "</li>";
    list.insertAdjacentHTML('beforeend', listItem);
    document.querySelector("body").appendChild(list);
}


