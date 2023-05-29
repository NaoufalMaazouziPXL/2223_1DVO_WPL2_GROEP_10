let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
let aantal = document.getElementById('aantalArt');
let totaal = 0
let divImg = document.getElementById('divImg');

aantal.innerText = storagewinkelmandje.length;
for (let teller = 0; teller < storagewinkelmandje.length; teller++) {
    totaal += storagewinkelmandje[teller].artikelPrijs * storagewinkelmandje[teller].artikelHoeveelheid;
    let img = document.createElement("img");
    img.src = 'assets/product'+ storagewinkelmandje[teller].artikelId+'.png';
    img.alt = "pet";
    img.classList.add('grootteAfbB', 'rounded', 'rounded-3', 'mx-2');
    divImg.appendChild(img);


}
    document.getElementById('totaal').textContent = totaal;
    document.getElementById('verzend').textContent = totaal;


let lever = document.getElementsByTagName('h3')[1];
let betaal = document.getElementsByTagName('h3')[2];
let returnButtonOne = document.getElementsByClassName('return-button-left')[0];
let returnButtonTwo = document.getElementsByClassName('return-button-left')[1];

lever.addEventListener('click', function () {
    document.getElementsByClassName('modal')[0].style.display = 'inline-block';
})

returnButtonOne.addEventListener('click', function () {
    document.getElementsByClassName('modal')[0].style.display = 'none';
})

let currentCity = document.getElementById('currentCity');
let currentStreetName = document.getElementById('currentStreetName');
let submitButton = document.getElementById('submitButtonNames');

submitButton.addEventListener('click', function () {
    currentCity.innerText = document.getElementById('postalCodeInput').value + " " + document.getElementById('cityNameInput').value;
    currentStreetName.innerText = document.getElementById('houseNumberAndStreetInput').value;
    document.getElementsByClassName('modal')[0].style.display = 'none';
})

betaal.addEventListener('click', function () {
    document.getElementsByClassName('modal-lever')[0].style.display = 'inline-block';
})

returnButtonTwo.addEventListener('click', function () {
    document.getElementsByClassName('modal-lever')[0].style.display = 'none';
})

let payconiqButton = document.getElementsByClassName('primary-pay')[0];
let payPalButton = document.getElementsByClassName('primary-pay')[1];
let kbcButton = document.getElementsByClassName('primary-pay')[2];
let mastercardButton = document.getElementsByClassName('primary-pay')[3];
let gPayButton = document.getElementsByClassName('primary-pay')[4];
let applePayButton = document.getElementsByClassName('primary-pay')[5];


payconiqButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/payconiq.svg';
    document.getElementById('currentPaymentText').innerText = "Payconiq";
})

payPalButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/paypal.svg';
    document.getElementById('currentPaymentText').innerText = "PayPal";
})

kbcButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/kbc.svg';
    document.getElementById('currentPaymentText').innerText = "KBC";
})

mastercardButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/mastercard.svg';
    document.getElementById('currentPaymentText').innerText = "MasterCard";
})

gPayButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/gpay.svg';
    document.getElementById('currentPaymentText').innerText = "GPay";
})

applePayButton.addEventListener('click', function () {
    document.getElementById('currentPayMethod').src = 'assets/applepay.svg';
    document.getElementById('currentPaymentText').innerText = "Apple Pay";
})



