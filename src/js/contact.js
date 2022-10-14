const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("tel");
const inputMessage = document.getElementById("message");

function validateInputName() {
    if(inputName.value.length < 3) {
        inputName.classList.add('not-valid-input');
        inputName.classList.remove('valid-input');
    } else {
        inputName.classList.remove('not-valid-input');
        inputName.classList.add('valid-input')
    }
}

function validateInputMessage() {
    if(inputMessage.value.length < 3) {
        inputMessage.classList.add('not-valid-input');
        inputMessage.classList.remove('valid-input');
    } else {
        inputMessage.classList.remove('not-valid-input');
        inputMessage.classList.add('valid-input')
    }
}

function validateInputTel() {
    if(inputTel.value.length < 3) {
        inputTel.classList.add('not-valid-input');
        inputTel.classList.remove('valid-input');
    } else {
        inputTel.classList.remove('not-valid-input');
        inputTel.classList.add('valid-input')
    }
}


function validateEmail() {
    if(inputEmail.value.includes("@")) {
        inputEmail.classList.add('valid-input');
        inputEmail.classList.remove('not-valid-input');
    } else {
        inputEmail.classList.add('not-valid-input');
        inputEmail.classList.remove('valid-input')
    }
}