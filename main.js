const documentFragment = document.createDocumentFragment();
const shuffleButton = document.getElementById("btnShuffleNumbers");
const sortButton = document.getElementById("btnSortNumbers");
const numbersDiv = document.querySelector(".numbers");
const numberDiv = document.getElementsByClassName("number");


/* ----------------- Colors -------------------- */

const colors = ['#2B8EAD', '#6F98A8', '#2F454E', '#BFBFBF'] //blue, lightBlue, navyBlue, lightGrey

/* ----------------- Data for the Div Elements with Numbers -------------------- */

const numbersData = [
    {number: 1, bgColor: colors[1]},
    {number: 2, bgColor: colors[0]},
    {number: 3, bgColor: colors[2]},
    {number: 4, bgColor: colors[0]},
    {number: 5, bgColor: colors[2]},
    {number: 6, bgColor: colors[3]},
    {number: 7, bgColor: colors[3]},
    {number: 8, bgColor: colors[1]},
    {number: 9, bgColor: colors[2]},
]

/* ----------------- Load Div Elements with the Numbers Data on DOM load -------------------- */

document.addEventListener('DOMContentLoaded', () => {
    for ( let index = 0; index < numbersData.length; index++ ) {
        let divElement = document.createElement('div');
        let numberDivElement = document.createElement("div");   
        let bgColorDivElement = document.createElement("div");  

        numberDivElement.innerHTML = numbersData[index].number;                   
        divElement.className = "number";
        divElement.dataset.id = numbersData[index].number;
        bgColorDivElement.className  = "bg-color";  
        bgColorDivElement.style.backgroundColor   = numbersData[index].bgColor;;   
        
        divElement.appendChild(numberDivElement);                             
        divElement.appendChild(bgColorDivElement);                              
        numbersDiv.appendChild(divElement);                          
    }
});

/* ----------------- Shuffle button click event listener -------------------- */

shuffleButton.addEventListener("click", () => {
    while (numbersDiv.children.length) {
        documentFragment.appendChild(numbersDiv.children[Math.floor(Math.random() * numbersDiv.children.length)]);
    }
    numbersDiv.appendChild(documentFragment);
});

/* ----------------- Sort Function in ascending order -------------------- */

const sortDivNumbers = () => {
    const numberDivArray = [...numberDiv];
    const numericallyOrderedDivs = numberDivArray.sort((element1, element2) => {
        return  element1.getAttribute('data-id') -  element2.getAttribute('data-id');
    });

    for ( let index = 0; index < numericallyOrderedDivs.length; index++ ) {
        const numberDivElement = numericallyOrderedDivs[index];
        documentFragment.appendChild(numberDivElement);
    }
    numbersDiv.appendChild(documentFragment);
}

/* ----------------- Sort button click event listener -------------------- */

sortButton.addEventListener("click", () => {
    sortDivNumbers();
});