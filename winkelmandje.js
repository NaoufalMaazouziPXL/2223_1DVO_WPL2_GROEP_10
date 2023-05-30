//Winkemandje aanmaken in een array
let winkelmandje = [];
let object = {
    artikelId: null,
    artikelNaam: "",
    artikelPrijs: null,
    artikelHoeveelheid: null
};


let buttonBestellen = document.getElementById('toevoegen')
console.log()

    
//Functie om items toe te voegen aan het winkelmandje
buttonBestellen.addEventListener('click', function toevoegen(){

    //Het lezen van de HTML waarden, om te weten wat we willen toevoegen
    let titel = document.getElementById("titel").textContent;
    let prijs = parseInt(document.getElementById("prijs").textContent);
    let hoeveelheid = parseInt(document.getElementById("input-amount").value);
    let artikelID = document.getElementById("productId").innerHTML;

    //Winkelmandje ophalen & in een array steken
    let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];

    let artikelFound = false;
    let object = {
        artikelId: artikelID,
        artikelNaam: titel,
        artikelPrijs: prijs,
        artikelHoeveelheid: hoeveelheid
    };

//Loop door het hele wninkelmandje om te zien of het artikel gevonden is of er al inzit
for (let i = 0; i < storagewinkelmandje.length; i++ && !artikelFound) {
    if (artikelID === storagewinkelmandje[i].artikelId) {
        let artikelToUpdate = storagewinkelmandje.find(obj => obj.artikelId === artikelID);
        artikelToUpdate.artikelHoeveelheid +=  hoeveelheid;
        artikelFound = true;
        localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));
    } 
    
}

    if (!artikelFound) {
        //De producten die in het winkelmandje zitten locaal opslaan
        storagewinkelmandje.push(object);
        localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));
    }




    window.location.href= 'betalingen.html'

})

//Functie voor het berekenen van de prijs
function berekenPrijs() {

    //Winkelmandje ophalen & in een array steken
    let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
    let totaalPrijs = 0;


    //Door het winkelmandje gaan & alle prijzen optellen
    for (let teller = 0; teller < storagewinkelmandje.length; teller++) {
        totaalPrijs += storagewinkelmandje[teller].artikelPrijs * storagewinkelmandje[teller].artikelHoeveelheid;
    }
}

function verwijderen(id) {
        //Winkelmandje ophalen & in een array steken
        let storagewinkelmandje = JSON.parse(localStorage.getItem("storagewinkelmandje")) || [];
        //Zoeken naar de locatie van het artikel dat we willen verwijderen
        let indexofObject = storagewinkelmandje.findIndex(object => {return object.artikelId === id});

        if (indexofObject != -1) {
            storagewinkelmandje.splice(indexofObject, 1);
            localStorage.setItem("storagewinkelmandje", JSON.stringify(storagewinkelmandje));
        }
}