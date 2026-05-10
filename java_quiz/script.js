const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { 
  threshold: 0.2 
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});



const clickButton = document.getElementById('clickBtn');
const statusText = document.getElementById('status-text');


const fonts = ['Pacifico', 'Comfortaa', 'Impact', 'Comic Sans MS'];
let fontIndex = 0; 

clickButton.addEventListener('click', () => {
  
  statusText.style.fontFamily = fonts[fontIndex];
  
  
  statusText.innerHTML = "yay! :D";
  
  
  fontIndex = (fontIndex + 1) % fonts.length;
});



const styleButton = document.getElementById('styleBtn');
const interactiveSection = document.getElementById('interactive-zone');


const colors = ['#add8e6', '#ffe3e7', '#ffffe0', '#d8ffd8']; 
let colorIndex = 0; 

styleButton.addEventListener('click', () => {
 
  interactiveSection.style.backgroundColor = colors[colorIndex];
  
 
  colorIndex = (colorIndex + 1) % colors.length;
  
  
  statusText.style.color = "#333"; 
});