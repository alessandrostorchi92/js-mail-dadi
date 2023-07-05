// L'utente invia la sua email una volta che clicca sulla call to action 

const btnSubmit = document.querySelector(".btn_submit");

btnSubmit.addEventListener("click", function () {

// Dichiarazione delle variabili e dell'array

const userEmaiIinput = document.querySelector("[name='useremail']").value;
const emailList = ["mariorossi@gmail.com", "mattiabianchi@gmail.com", "rosamaria@gmail.com", "francescaverdi@gmail.com", "gianfranconeri@gmail.com", "saraceleste@gmail.com"];

// Controllare che l'email dell'utente sia all'interno dell'array 

for (let i = 0; i < emailList.length; i++) {

const currentEmail = emailList[i]

if (currentEmail === userEmaiIinput) {
    console.log("Email dell'utente è all'interno della lista di chi può accedere");
} else {
    console.log("Accesso dell'utente negato");
}

}

})