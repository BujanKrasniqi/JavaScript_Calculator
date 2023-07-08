// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNummber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNummber = sumUpToNummber + i;

    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNummber;
    outputResultElement.style.display = 'block';
}
calculateSumButtonElement.addEventListener('click' , calculateSum);


// --------------------  Highlight links -----------------

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }

}
highlightLinksButtonElement.addEventListener('click' , highlightLinks);


// -------------------- Display user Data ----------------

const dummyUserData = {
    firstName: 'Max',
    lastName: 'Schwarzmuller',
    age: 32
};

const displayUserdatatButtonElement  = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dummyUserData ) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);

    }
}

displayUserdatatButtonElement.addEventListener('click' ,displayUserData);



// ------------------- Statistcs / Roll The Dice ----------------------

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6 ) + 1;                                      
}

function deriveNumberOfDiceRolls() {
const targetNumberInputElment = document.getElementById('user-target-number');
const diceRollsListElement = document.getElementById('dice-rolls');

const enteredNumber = targetNumberInputElment.value;
diceRollsListElement.innerHTML = '';

let hasRolledTargetNumber = false;
let numberOfRolls = 0;

while (!hasRolledTargetNumber) {
   const rolledNumber =  rollDice();

numberOfRolls++;
const newRollListElement = document.createElement('li');
const outputTexti = 'Roll' + numberOfRolls + ':' + rolledNumber;
newRollListElement.textContent = outputTexti;
diceRollsListElement.append(newRollListElement);
hasRolledTargetNumber = rolledNumber == enteredNumber;
}

const outputTotalRollsElement = document.getElementById('output-total-rolls');
const outputTargerNumberElment = document.getElementById('output-target-number');

outputTargerNumberElment.textContent = enteredNumber;
outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);

// ------------------- Ushtrime ----------------------


// ------------------- JavaScript Calculator ----------------------

// const llogaritShumenElementitButon = document.querySelector('#calculator button');

// function llogaritShumen() {
//     const numriCaktuariPerdorusit = document.getElementById('user-number');
//     const vendonsNumnrin = numriCaktuariPerdorusit.value;
    
//     let permbledhNumrat = 0;

//     for (let i=0; i<= vendonsNumnrin; i++) {
//         permbledhNumrat = permbledhNumrat + i;

//     }
//     const rezultatiNxjerr = document.getElementById('calculated-sum');

//     rezultatiNxjerr.textContent = permbledhNumrat;
//     rezultatiNxjerr.style.display = 'block';
// }

//  llogaritShumenElementitButon.addEventListener('click',  llogaritShumen);




// ----------- Trego te gjitha Linqet -----------------


// const theksoElementeteButonitLink = document.querySelector('#highlight-links button');

// function theksoLidhjet() {
//     const anchorElements = document.querySelectorAll('#highlight-links a');

//     for (const anchorElement of anchorElements) {
//         anchorElement.classList.add('highlight')
//     }
// }
// theksoElementeteButonitLink.addEventListener('click' , theksoLidhjet);


// -------------------- Shfaqni të dhënat e përdoruesit ----------------

// const teDhenatePerdoruesit = {
//     emri: 'Filan',
//     mbiemri: 'Fisteku',
//     mosha: 32
// };
// const shfaqTeDhenatePerdoruesitNeButon = document.querySelector('#user-data button');

// function shfaqTeDhenatePerdoruesit() {
//     const elementiiDhenaveDalese = document.getElementById('output-user-data');

//     elementiiDhenaveDalese.innerHTML = '';

//     for (const key in teDhenatePerdoruesit) {
//         const listaReTeDhenaveTePerdoruesit = document.createElement('li');
//         const tekstiDales = key.toUpperCase() + ':' + teDhenatePerdoruesit[key];
//         listaReTeDhenaveTePerdoruesit.textContent = tekstiDales;
//         elementiiDhenaveDalese.append(listaReTeDhenaveTePerdoruesit);
//     }
// }
// shfaqTeDhenatePerdoruesitNeButon.addEventListener('click' , shfaqTeDhenatePerdoruesit);


// ------------------------ Statistika / Hidhni zare ---------------------------------

// const elementiButoniHedhjesSeZarit = document.querySelector('#statistics button');

// function hedhZarin() {
//     return Math.floor(Math.random() * 6 ) + 1;  
// }

// function nxjerrNumrineRrotullaveTeZarit() {
//     const elementiHyresiNumritTeSynuar = document.getElementById('user-target-number');
//     const elementiListesSeHedhjesTeZarit = document.getElementById('dice-rolls');

//     const numriFutur = elementiHyresiNumritTeSynuar.value;
//     elementiListesSeHedhjesTeZarit.innerHTML = '';

//     let shenimiNumritTeSynuar = false;
//     let numriRrotullimeve = 0;

//     while (!shenimiNumritTeSynuar) {
//         const numriRrotulluar = hedhZarin();

//         numriRrotullimeve++;

//         const elementiRiListesSeRrotullave = document.createElement('li');
//         const tekstiDales = 'Roll' + numriRrotullimeve + ':' + numriRrotulluar;
//         elementiRiListesSeRrotullave.textContent = tekstiDales;
//         elementiListesSeHedhjesTeZarit.append(elementiRiListesSeRrotullave);
//         shenimiNumritTeSynuar = numriRrotulluar == numriFutur;
//     }
//     const elementiTotaliRrotullimeveTeNxjerra = document.getElementById('output-total-rolls');
//     const elementiNxjerriNumritTeSynuar  = document.getElementById('output-target-number');

//     elementiNxjerriNumritTeSynuar.textContent = numriFutur;
//     elementiTotaliRrotullimeveTeNxjerra.textContent = numriRrotullimeve;
// }
// elementiButoniHedhjesSeZarit.addEventListener('click', nxjerrNumrineRrotullaveTeZarit);


