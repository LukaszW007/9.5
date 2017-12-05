var listOfButtons = document.getElementsByClassName('button'),
    newButton,
    nuberOfButtons,
    textInButton;

function addButtons(numberOfButtons) {
    for (var i = 0; i < numberOfButtons; i++) {
        newButton = document.createElement('BUTTON');
        newButton.className = 'button';
        newButton.innerHTML = 'Alert' + (i+1);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(newButton);
    }
}
function alertReader(){
    listOfButtons = document.getElementsByClassName('button');
    for (var j=0;j<listOfButtons.length;j++){
        textInButton = listOfButtons[j].innerText;
        alert(textInButton);
    }
}
