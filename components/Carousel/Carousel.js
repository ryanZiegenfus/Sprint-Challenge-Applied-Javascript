/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent (array) {
  var carouselDiv = document.createElement('div'),
  leftBtn = document.createElement('div'),
  rightBtn = document.createElement('div'),
  image = document.createElement('img');

  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(img);
  carouselDiv.appendChild(rightBtn);

  leftBtn.addEventListener('click', () => {
    i === 0 ? i = array.length - 1 : i--;
    carouselContainerDiv.appendChild(carouselComponent(imgArray));
  })

  rightBtn.addEventListener('click', () => {
    i === array.length - 1 ? i = 0  : i++;
    carouselContainerDiv.appendChild(carouselComponent(imgArray));
  })
  image.src = array[i];
  console.log('Hello')
  return carouselDiv;
}
var imgArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'],
    i = 0;

carouselContainerDiv = document.querySelector('.carousel-container');
rightBtn = document.createElement('div');
rightBtn.classList.add('right-button');

carouselContainerDiv.appendChild(rightBtn);


