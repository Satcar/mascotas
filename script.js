const changeAnimal = () => {
    const animalSelected = document.querySelector('#animalSelector');
    const titleTxt = document.querySelector('#titleTxt');
    const openedDoor = document.querySelector('#openedDoor');
    const closedDoor = document.querySelector('#closedDoor');
    const dog = document.querySelector('#dog');
    const cat = document.querySelector('#cat');
    const canary = document.querySelector('#canary');
  
    openedDoor.style.display = 'none';
    closedDoor.style.display = 'none';
    dog.style.display = 'none';
    cat.style.display = 'none';
    canary.style.display = 'none';
  
    switch (animalSelected.value) {
      case 'dog':
        titleTxt.innerText = 'Has elegido un perro';
        openedDoor.style.display = 'inline';
        dog.style.display = 'inline';
        break;
      case 'cat':
        titleTxt.innerText = 'Has elegido un gato';
        openedDoor.style.display = 'inline';
        cat.style.display = 'inline';
        break;
      case 'canary':
        titleTxt.innerText = 'Has elegido un canario';
        openedDoor.style.display = 'inline';
        canary.style.display = 'inline';
        break;
      default:
        titleTxt.innerText = 'Elige un animal';
        closedDoor.style.display = 'inline';
        break;
    }
  };
  