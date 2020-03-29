var button = document.getElementById("enter");
var clear = document.getElementById("clrall");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");
var del = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var btnDel = document.createElement("button");
    btnDel.appendChild(document.createTextNode("X"));

    var li = document.createElement("li");
    li.addEventListener("click", markListItem);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(btnDel);
    input.value = "";
    
    function markListItem() {
        li.classList.toggle("done");
    }


    btnDel.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
        for (var x = 0; x < del.length; x++) {
            ul.removeChild(del[x]);
        }
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function clearAllList() {
    ul.innerHTML ="";
}

clear.addEventListener("click", clearAllList);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);