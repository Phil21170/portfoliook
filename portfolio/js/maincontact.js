const burger = document.querySelector(".burger");
const burgeri = document.querySelector('.burger i');
const nav = document.querySelector("header nav");
const liens = [];

for(let i = 1; i <= 5; i++){
    const lien = document.querySelector(`header nav a:nth-child(${i})`);
    liens.push(lien);
}


function handleWindowResize() {
  if (window.innerWidth >= 769) {
    nav.style.display = "flex";
  } else {
    if (burgeri.classList.contains("fa-xmark")) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }
}

window.addEventListener("resize", handleWindowResize);

burger.addEventListener("click", function(event) {
  event.preventDefault();
  burgeri.classList.toggle("fa-bars");
  burgeri.classList.toggle("fa-xmark");
  handleWindowResize();
});


liens.forEach(lien => {
  lien.addEventListener('click', () => {
    if (window.innerWidth < 769) { // je verifie si le burger est visible
      nav.style.display = 'none';
      burgeri.classList.toggle("fa-bars");
      burgeri.classList.toggle("fa-xmark");
     
    }else{
      nav.style.display = "flex";
    }
  });
});