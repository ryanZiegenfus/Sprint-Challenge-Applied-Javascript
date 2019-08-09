// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div'),
        dateSpan = document.createElement('span'),
        lambdaH1 = document.createElement('h1'),
        tempSpan = document.createElement('span');
        
        headerDiv.classList.add('header');
        dateSpan.classList.add('date');
        tempSpan.classList.add('temp');

        headerDiv.appendChild(dateSpan);
        headerDiv.appendChild(lambdaH1);
        headerDiv.appendChild(tempSpan);

        dateSpan.textContent = 'SMARCH 28, 2019';
        lambdaH1.textContent = 'Lambda Times';
        tempSpan.textContent = '98°';

    return headerDiv;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());


