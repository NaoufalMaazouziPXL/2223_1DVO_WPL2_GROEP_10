let lever = document.getElementsByTagName('h3')[1];
let betaal = document.getElementsByTagName('h3')[2];

lever.addEventListener('click', function () {
    document.getElementsByClassName('modal')[0].style.display = 'inline-block';

})

betaal.addEventListener('click', function () {
    document.getElementsByClassName('modal-lever')[0].style.display = 'inline-block';

})

let closeButton = document.getElementsByClassName('btn-close')[0];


closeButton.addEventListener('click', function () {
    document.getElementsByClassName('modal')[0].style.display = 'none';
})

let closeButtonLever = document.getElementsByClassName('btn-close')[1];

closeButtonLever.addEventListener('click', function () {
    document.getElementsByClassName('modal-lever')[0].style.display = 'none';
})