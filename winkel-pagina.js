let producten = document.getElementsByClassName('product')


for (let product of producten) {
    product.addEventListener("click", function clickHandler(){
        let inside = product.childNodes[3];
        let productnaam = inside.childNodes[1].textContent; 
        let productprijs = inside.childNodes[3].textContent;
        let productID = inside.childNodes[5].textContent;

        let encodedNaam = encodeURIComponent(productnaam);
        let encodedPrijs = encodeURIComponent(productprijs);
        let encodedID = encodeURIComponent(productID);

        window.location.href= 'product-specifiek.html?naam='+encodedNaam+'&productprijs='+encodedPrijs+'&productID='+encodedID
    })


    
}


