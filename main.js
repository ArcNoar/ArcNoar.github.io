let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#000000';
tg.MainButton.hide();
tg.MainButton.setText("Confirm.");
let userChoice = "";
let replicantButton = document.getElementById("Stack_Button");
let marioButton = document.getElementById("Synapsis_Button");
console.log(replicantButton)

replicantButton.addEventListener("click", () => {
    userChoice = "Replicant"
    console.log('CLICKED')
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(userChoice)
    tg.close();
});