//loop door het winkelmandje en haal de gegevens eruit
prodcutShow();
totaalPrijs();
function totaalPrijs() {
            //Winkelmandje ophalen & in een array steken
        let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
        let totaal = 0

        for (let teller = 0; teller < storagewinkelmandje.length; teller++) {
            totaal += storagewinkelmandje[teller].artikelPrijs * storagewinkelmandje[teller].artikelHoeveelheid;
        }
            document.getElementById('totaal').textContent = totaal;
    }

function prodcutShow(){
                //Winkelmandje ophalen & in een array steken
                let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];

                let content = document.getElementById("content")
                for (let teller = 0; teller < storagewinkelmandje.length; teller++) {
                    let inhoud = document.createElement("div");
                    inhoud.classList.add('inhoud', "col-lg-9", "col-md-12" ,"col-12", "py-md-5", "col-12", "d-lg-flex", "py-lg-5", "py-4");
                    content.appendChild(inhoud);

                    let bigChild  = document.createElement("div");
                    bigChild.classList.add("bg-color-3", "col-12", "d-lg-flex", "d-flex", "d-md-flex", "rounded-4")
                    inhoud.appendChild(bigChild);

                    let smallChildImg = document.createElement("div");
                    smallChildImg.classList.add("col-lg-2", "col-md-2", "col-2", "py-lg-4");
                    bigChild.appendChild(smallChildImg);

                    let img = document.createElement("img");
                    img.className = "img-fluid";
                    img.src = 'assets/product'+ storagewinkelmandje[teller].artikelId+'.png';
                    img.alt = "pet"
                    smallChildImg.appendChild(img);

                    let smallChildTitel = document.createElement("div");
                    smallChildTitel.classList.add("col-lg-4", "col-md-4", "col-t-lg-4","px-lg-4");
                    bigChild.appendChild(smallChildTitel);

                    let titel = document.createElement("p");
                    let textTitel = document.createTextNode(storagewinkelmandje[teller].artikelNaam);
                    titel.classList.add('text-p', 'pt-lg-4', 'pt-md-4', 'pt-4', 'px-md-3', 'px-3');
                    titel.appendChild(textTitel);
                    smallChildTitel.appendChild(titel);


                    let smallChildAmount = document.createElement('div');
                    smallChildAmount.classList.add('col-lg-5', 'col-md-5', 'col-4', 'd-lg-flex', 'd-flex', 'text-end', 'align-items-center')
                    bigChild.appendChild(smallChildAmount);


                    let minus = document.createElement('i');
                    minus.classList.add('fa-solid', 'fa-minus', 'col-lg-2', 'col-md-2', 'col-1', 'minus');
                    smallChildAmount.appendChild(minus);

   

                    let divInput = document.createElement('div');
                    divInput.classList.add('col-lg-2', 'col-md-2', 'col-2');
                    smallChildAmount.appendChild(divInput);

                    let input = document.createElement('input');
                    input.classList.add('input', 'ps-2', 'col-lg-9', 'col-12')
                    input.type = 'number';
                    input.min = 1;
                    input.value= storagewinkelmandje[teller].artikelHoeveelheid;
                    divInput.appendChild(input);


                    let plus = document.createElement('i');
                    plus.classList.add('fa-solid', 'fa-plus', 'col-lg-1', 'col-1', 'plus');
                    smallChildAmount.appendChild(plus);

                    let pElement = document.createElement("p");
                    let pElementTekst = document.createTextNode('€'+ storagewinkelmandje[teller].artikelPrijs);
                    pElement.classList.add('col-lg-4', 'col-md-4', 'col-4', 'pt-lg-3', 'pt-md-3', 'pt-3', 'px-5', 'text-end');
                    pElement.appendChild(pElementTekst);
                    smallChildAmount.appendChild(pElement);

                    let smallChildButton = document.createElement('div');
                    smallChildButton.classList.add('col-lg-5', 'col-md-5', 'col-4', 'd-lg-flex', 'd-flex', 'text-end', 'align-items-center')
                    bigChild.appendChild(smallChildButton);

                    let button = document.createElement('button');
                    button.classList.add('button_3', 'col-3', 'kruisje');
                    smallChildButton.appendChild(button);

                    let icon = document.createElement('i');
                    icon.classList.add('fa-solid', 'fa-solid-2', 'fa-xmark' );
                    button.appendChild(icon);

                    let idprod = document.createElement('p');
                    let textId = document.createTextNode(storagewinkelmandje[teller].artikelId)
                    idprod.classList.add('hidden');
                    idprod.setAttribute('id', 'idprod');
                    smallChildButton.appendChild(idprod);
                    idprod.appendChild(textId);


                }
}


let kruisje = document.getElementsByClassName('kruisje');

for (let box of kruisje) {
    box.addEventListener('click', function handleBoxClick(){
            //Winkelmandje ophalen & in een array steken
            let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
            //Zoeken naar de locatie van het artikel dat we willen verwijderen
            let indexofObject = storagewinkelmandje.findIndex(object => {return object.artikelId === box.nextElementSibling.textContent});

        
            if (indexofObject != -1) {
                storagewinkelmandje.splice(indexofObject, 1);
                localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));
            }
            location.reload();
    })
    
}






// Get all the plus buttons
let plusButtons = document.getElementsByClassName('plus');

// Loop through each plus button and add the click event listener
for (let plusButton of plusButtons) {
    plusButton.addEventListener('click', function handlePlusClick() {
        // Traverse up the DOM hierarchy to the parent element containing the input
        let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
        let parentElement = plusButton.closest('.bg-color-3');

        // Get the input element
        let inputElement = parentElement.querySelector('.input');

        // Increment the input value
        inputElement.value++;

        // Retrieve the id value
        let idElement = parentElement.querySelector('#idprod');
        let id = idElement.textContent;

        let indexofObject = storagewinkelmandje.findIndex(object => {return object.artikelId === id});
        if (indexofObject !== -1) {
            // Adjust the value of the name property
            storagewinkelmandje[indexofObject].artikelHoeveelheid++;
        localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));}
        totaalPrijs();

    });
}


// Get all the plus buttons
let minButtons = document.getElementsByClassName('minus');

// Loop through each plus button and add the click event listener
for (let minButton of minButtons) {
    minButton   .addEventListener('click', function handlePlusClick() {
        // Traverse up the DOM hierarchy to the parent element containing the input

        let parentElement = minButton.closest('.bg-color-3');

        // Get the input element
        let inputElement = parentElement.querySelector('.input');

        // Increment the input value
        if(inputElement.value > 1){
            let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
            inputElement.value--;

            // Retrieve the id value
            let idElement = parentElement.querySelector('#idprod');
            let id = idElement.textContent;
    
            let indexofObject = storagewinkelmandje.findIndex(object => {return object.artikelId === id});
            if (indexofObject !== -1) {
                // Adjust the value of the name property
                storagewinkelmandje[indexofObject].artikelHoeveelheid--;
            localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));}
            totaalPrijs();
        }


    });
}