let settingsIcon = document.getElementById('settings-icon');
let returnButtonOne = document.getElementsByClassName('return-button-left')[0];
let saveButton = document.getElementsByClassName('btn-primary')[0];
let nameInput = document.getElementsByClassName('input-box-modal')[0];
let mailInput = document.getElementsByClassName('input-box-modal')[1];
let numberInput = document.getElementsByClassName('input-box-modal')[2];

settingsIcon.addEventListener('click', function () {
    console.log('lol')
    document.getElementsByClassName('modal')[0].style.display = 'inline-block';
})

returnButtonOne.addEventListener('click', function () {
    document.getElementsByClassName('modal')[0].style.display = 'none';
})

saveButton.addEventListener('click', function () {
    document.getElementById('name-place-holder').innerText = nameInput.value;
    document.getElementById('mail-place-holder').innerText = mailInput.value;
    document.getElementById('number-place-holder').innerText = numberInput.value;
    document.getElementsByClassName('modal')[0].style.display = 'none';
})


