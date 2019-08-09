// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articlesArray = Object.values(response.data.articles);
        const cardsContainer = document.querySelector('.cards-container');
        console.log(articlesArray);
        articlesArray.forEach(element => {
            element.forEach(e => cardsContainer.appendChild(cardComponent(e)))
        })

    })

function cardComponent (obj) {
    const cardDiv = document.createElement('div'),
    headlineDiv = document.createElement('div'),
    authorDiv = document.createElement('div'),
    imgDiv = document.createElement('div'),
    image = document.createElement('img'),
    authorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    headlineDiv.textContent = `${obj.headline}`;
    authorSpan.textContent = `By ${obj.authorName}`;
    image.src = `${obj.authorPhoto}`;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorSpan);
    imgDiv.appendChild(image);
    
    return cardDiv
}