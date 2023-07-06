// Dichiarazione delle variabili e dell'array

const emailListAllowed = ["mario.rossi@gmail.com", "mattia.bianchi@gmail.com", "rosa.maria@gmail.com", "francesca.verdi@gmail.com", "gianfranco.neri@gmail.com", "sara.celeste@gmail.com"];
const userEmaiIinput = document.querySelector("[name='useremail']");
const btnSubmit = document.querySelector(".btn_submit");

// L'utente invia la sua email una volta che clicca sulla call to action

btnSubmit.addEventListener("click", function () {
    const userEmail = userEmaiIinput.value;
    let emailFound = false;

    // Controllare che l'email dell'utente sia nell'array 

    for (let i = 0; i < emailListAllowed.length; i++) {

        // Validazione Email inserita 

        if (userEmail === emailListAllowed[i]) {
            emailFound = true;
        }
    }

    // Condizione email valida

    if (emailFound === true) {
        document.getElementById("valid_email").innerHTML = "L'email inserita è valida";
    }

    // Condizione email non valida

    else {
        document.getElementById("invalid_email").innerHTML = "L'email inserita non è valida";
        document.getElementById("invalid_email").classList.add("alert_invalid");
    }

})