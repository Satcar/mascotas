const changeAnimal = () => {
    const animalSelected = document.querySelector('#animalSelector');
    const titleTxt = document.querySelector('#titleTxt')
    const opened = document.querySelector('#openedDoor');
    const closed = document.querySelector('#closedDoor');
    const dog = document.querySelector('#dog');
    const cat = document.querySelector('#cat');
    const duck = document.querySelector('#duck');


    switch (animalSelected.value) {
        case 'closedDoor':
            titleTxt.innerText = 'Elige un animal';
            openedDoor.style.display = 'none';
            dog.style.display = 'none';
            cat.style.display = 'none';
            duck.style.display = 'none';
            break;  
        case 'dog':
            titleTxt.innerText = 'Has elegido un perro';
            dog.style.display = 'inline';
            openedDoor.style.display = 'inline';
            break;
        case 'cat':
            titleTxt.innerText = 'Has elegido un gato';
            cat.style.display = 'inline';
            openedDoor.style.display = 'inline';

            break;
        case 'duck':
            titleTxt.innerText = 'Has elegido un pato'; 
            duck.style.display = 'inline';
            openedDoor.style.display = 'inline';

            break;
        default:
            titleTxt.innerText = 'Elige un animal';
            openedDoor.style.display = 'none';
            dog.style.display = 'none';
            cat.style.display = 'none';
            duck.style.display = 'none';
            break;
    }
}