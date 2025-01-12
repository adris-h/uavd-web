const menuButton = document.querySelector(".n-button");
const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    navBar.classList.toggle("active");
});

const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

document.addEventListener('scroll', function() {
  const scrolled = window.scrollY;

  const layer1 = document.querySelector('#layer-1');
  const layer2 = document.querySelector('#layer-2');
  const layer3 = document.querySelector('#layer-3');
  const layer4 = document.querySelector('#layer-4');
  const layer5 = document.querySelector('#layer-5');
  const layer6 = document.querySelector('#layer-6');
  const layer7 = document.querySelector('#layer-7');
  const layer8 = document.querySelector('#layer-8');
  const layer9 = document.querySelector('#layer-9');

  layer1.style.transform = `translateY(${scrolled * 0.1}px)`;
  layer2.style.transform = `translateY(${scrolled * 0.2}px)`;
  layer3.style.transform = `translateY(${scrolled * 0.3}px)`;
  layer4.style.transform = `translateY(${scrolled * 0.4}px)`;
  layer5.style.transform = `translateY(${scrolled * 0.5}px)`;
  layer6.style.transform = `translateY(${scrolled * 0.6}px)`;
  layer7.style.transform = `translateY(${scrolled * 0.7}px)`;
  layer8.style.transform = `translateY(${scrolled * 0.1}px)`;
  layer9.style.transform = `translateY(${scrolled * 0.0}px)`;
});

/*document.addEventListener('scroll', function () {
  const sQuote = document.querySelector('.s-quote');
  const images = document.querySelectorAll('.s-quote img');
  const sQuotePosition = sQuote.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sQuotePosition < screenPosition) {
      setTimeout(() => {
          images.forEach((img, index) => {
              setTimeout(() => {
                  img.classList.add('animate-image'); 
              }, index * 300); 
          });
      }, 500);
  }
});*/

document.addEventListener('DOMContentLoaded', () => {
  const storyParts = document.querySelectorAll('.story-part');

  // Function to toggle between English and Chinese for each story part
  function switchLanguage() {
      storyParts.forEach(storyPart => {
          const englishText = storyPart.querySelector('.english-text');
          const chineseText = storyPart.querySelector('.chinese-text');

          if (englishText.style.display === 'none') {
              englishText.style.display = 'block';
              chineseText.style.display = 'none';
          } else {
              englishText.style.display = 'none';
              chineseText.style.display = 'block';
          }
      });
  }

  // Set an interval to switch languages every 3 seconds
  setInterval(switchLanguage, 1000);
});

const images = [
  'img/gallery/10.webp',
  'img/gallery/9.avif', 
  'img/gallery/1.webp',
  'img/gallery/2.webp',
  'img/gallery/3.webp',
  'img/gallery/4.jpeg',
  'img/gallery/5.png',
  'img/gallery/6.jpeg',
  'img/gallery/7.jpeg',
  'img/gallery/8.jpeg',
];

let currentIndex = 0;

const galleryImg = document.getElementById('gallery-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Update main image display
function updateImage() {
  console.log("Attempting to load image:", images[currentIndex]); 
  galleryImg.src = images[currentIndex];
  galleryImg.onload = function() {
    console.log("Image loaded successfully:", images[currentIndex]); 
    
  };
  galleryImg.onerror = function() {
    console.error("Error loading image:", images[currentIndex]); 
    
  };
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});