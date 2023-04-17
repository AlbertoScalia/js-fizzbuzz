//Richiamando il container nel DOM, assegno la variabile a lui e a un elemento "ul"
const container = document.getElementById(`baseContainer`);
const ulElement = document.createElement(`ul`);
container.append(ulElement);

//Aggiungo le classi di Bootstrap all'elemento "ul"
ulElement.classList.add(`list-unstyled`, `d-flex`, `flex-wrap`, `justify-content-center`, `align-items-center`, `gap-3`);

//Inizio un ciclo for che generi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //Il ciclo creerà un elemento "li" per ogni numero generato
    const liElement = document.createElement(`li`);
    ulElement.append(liElement);

    //Stessa cosa con per i div che conterranno il testo
    const cardElement = document.createElement(`div`);
    cardElement.classList.add(`base`, `d-flex`, `justify-content-center`, `align-items-center`, `fw`);
    cardElement.innerHTML = `${i}`;
    
    //Creo quindi le condizioni
    if (i % 3 === 0 && i % 5 === 0) {
        cardElement.classList.add(`fizzbuzz`);
        cardElement.innerHTML = `fizzbuzz`;

    } else if (i % 3 === 0) {
        cardElement.classList.add(`fizz`);
        cardElement.innerHTML = `fizz`;

    } else if (i % 5 === 0) {
        cardElement.classList.add(`buzz`);
        cardElement.innerHTML = `buzz`;
    }

    liElement.append(cardElement);

}

