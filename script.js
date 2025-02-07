const uppercaseCheckbox = document.getElementById('uppercase');
const numberCheckbox = document.getElementById('number');
const specialCheckbox = document.getElementById('special');
const rangeNumber = document.getElementById('number-character');
const textField = document.getElementById('name');
const buttonGeneratePass = document.getElementById('generate-password');
const copyText = document.getElementById('copy-password');

function updateRangeValue() {
    document.getElementById("rangeValue").textContent = rangeNumber.value;
}

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const specialCharacter = '@-_.<>,;';


buttonGeneratePass.addEventListener('click', function() {
    
    let passwordGenerated = '';
    let characterPool = lowerCase;

    if (uppercaseCheckbox.checked) {
        characterPool += uppercaseLetter;
    }
    if (numberCheckbox.checked) {
        characterPool += numbers;
    }
    if (specialCheckbox.checked) {
        characterPool += specialCharacter;
    }

    for(let i = 0; i < rangeNumber.value; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length)
        passwordGenerated += characterPool[randomIndex]
    }

    textField.setAttribute('value', passwordGenerated)
});

const inputContainer = document.querySelector('.input-container')

copyText.addEventListener('click', function(event) {
    event.preventDefault()
    navigator.clipboard.writeText(textField.value).then(() => {

        const messageConfirmed = document.createElement('span')
        messageConfirmed.textContent ='Password copiata!'
        messageConfirmed.classList.add('message-confirmed')

        inputContainer.appendChild(messageConfirmed)

        setTimeout(() => {
            messageConfirmed.remove()
        }, 4000);
        
    }).catch(() => {
        const messageError = document.createElement('span')
        messageError.textContent = 'Errore nella copia, genera una nuova password e riprova'
        messageError.classList.add('message-error')

        inputContainer.appendChild(messageError)

        setTimeout(() => {
            messageError.remove()
        }, 4000);
    })
});
