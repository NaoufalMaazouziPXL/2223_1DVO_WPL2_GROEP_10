let plus = document.getElementById('plus');


plus.addEventListener('click', function addPlus() {
    let amount = document.getElementById('input-amount');
    amount.value++; 
})
    

let minus = document.getElementById('minus');

minus.addEventListener('click', function addMinus() {
    let amount = document.getElementById('input-amount');

    if (amount.value > 1 ) {
        amount.value--; 
    }
})


let boxes = document.getElementsByClassName('maat');

for (let box of boxes) {
    box.addEventListener('click', function handleBoxClick(){

        removeActive();
        box.classList.add('active')
    })
}



function removeActive() {
    for (let box of boxes) {
        box.classList.remove('active')
    }
}



  // De query parameters van de URL
  let params = new URLSearchParams(window.location.search);
  
  // De waarden van van de parameters van de query
  let naam = params.get('naam');
  let prijsEuro = params.get('productprijs');
  let id = params.get('productID');


  let prijs = prijsEuro.slice(prijsEuro.indexOf('€') + 1);

let titel = document.createTextNode(naam);
let prijsnode = document.createTextNode(prijs);
let idnode = document.createTextNode(id);


document.getElementById('titel').appendChild(titel);
document.getElementById('prijs').appendChild(prijsnode);
document.getElementById('productId').appendChild(idnode);



let fotos =document.getElementsByClassName('img-responsive')


for (let foto of fotos) {
    foto.src = 'assets/product' + id + '.png'
}


