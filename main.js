'use strict';

const buttonUpperCase = document.querySelector('#maiuscole');
const buttonNumber = document.querySelector('#numeri');
const buttonSpecial = document.querySelector('#speciali');
const generateButton = document.querySelector('.card__button--generate');
const Lunghezza = document.querySelector('.input-number');
const passwordLabel = document.querySelector('.password-label');
const copyButton = document.querySelector('.card__button--copy');

let Maiuscole = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Numeri = '0123456789';
let Speciali = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

generateButton.addEventListener('click', function(){

    let sorteggio = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    if(buttonUpperCase.checked) sorteggio+=Maiuscole;
    if(buttonNumber.checked) sorteggio+=Numeri;
    if(buttonSpecial.checked) sorteggio+=Speciali;

    if(Lunghezza.value < 6) Lunghezza.value=6;
    if(Lunghezza.value > 60) Lunghezza.value=60;
    
    for(let i=0; i< Lunghezza.value; i++)
    {
        let randomNumber = Math.floor(Math.random() * sorteggio.length);
        password += sorteggio[randomNumber];
    }
    passwordLabel.textContent = '';
    passwordLabel.textContent = password;
    sorteggio='';
    password='';
});

copyButton.addEventListener('click', function()
{
    let text = passwordLabel.textContent;
    if(passwordLabel.textContent !== 'Password...') navigator.clipboard.writeText(text);
});