

let plus = document.getElementsByClassName('plus');

for (let box of plus) {
    box.addEventListener('click', function handleBoxClick(){
        let divinput = box.previousElementSibling;

        let input = divinput.firstElementChild;
        input.value++;
    })
    
}



let minus = document.getElementsByClassName('minus');

for (let box of minus) {
    box.addEventListener('click', function handleBoxClick(){
        let divinput = box.nextElementSibling;

        let input = divinput.firstElementChild;
        if (input.value > 1) {
            input.value--;
        }

    })
    
}