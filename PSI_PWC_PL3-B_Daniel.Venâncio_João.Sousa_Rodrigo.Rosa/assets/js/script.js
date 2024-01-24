// Variável para armazenar o valor do contador
let counterValue = 0;

document.addEventListener("DOMContentLoaded", function () {
    fillBirthYearSelect();
});

function fillBirthYearSelect() {
    var currentYear = new Date().getFullYear();
    var select = document.getElementById("birthYear");

    for (var year = 1900; year <= currentYear; year++) {
        var option = document.createElement("option");
        option.value = year;
        option.text = "Ano " + year;
        select.appendChild(option);
    }
}

var formContact = document.getElementById("contact-form");
formContact.addEventListener("submit", function (event) {
    //Previne o comportamento padrão do envio do formulário
    event.preventDefault();
    if (validateForm()) {
        //Se o resultado desta função for verdadeiro, deve guardar os dados do formulario, se estiver validos
        //E também deve mostrar uma mensagem de sucesso.
    }
});

function validateForm() {
    var isValid = true;
    var name = getElementById("nameInput");
    var email = getElementById("emailInput");
    //Valida se o nome tem mais que 3 letras
    if (name.value.length < 3) {
        isValid = false;
        alert("Insira no mínimo 3 caracteres");
    }
    //Valida o email
}

function toggleFavorito(button) {
    button.classList.toggle("active");
    const icon = button.querySelector('.icon');
    icon.innerHTML = button.classList.contains('active') ? '&#9733;' : '&#9733;';
}

function decrementCounter(cardId) {
    let counterElement = document.getElementById(cardId);
    counterElement.innerText = parseInt(counterElement.innerText) - 1;
}

function incrementCounter(cardId) {
    let counterElement = document.getElementById(cardId);
    counterElement.innerText = parseInt(counterElement.innerText) + 1;
}

// Função para atualizar o valor do contador na página
function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}

function mostrarPopup() {
    alert('Compra Efetuada!');
}