document.addEventListener("DOMContentLoaded", event => {
  const logo = document.querySelector(".logo");
  const videoContainer = document.querySelector(".video-container");
  const myVideo = document.getElementById("myVideo");
  const contactButton = document.getElementById('contactButton');
  const contactForm = document.getElementById('contactForm');
  const speed = 0.05;

  const accueilButton = document.querySelector(".accueil").parentNode;
  const vitrineButton = document.querySelector(".vitrine").parentNode;
  const aproposButton = document.querySelector(".apropos").parentNode;
  const shopButton = document.querySelector(".shop").parentNode;
  const informationButton = document.getElementById('informationButton');
  const informationMenu = document.getElementById('info-menu');

  logo.addEventListener("animationend", () => {
    logo.style.display = "none";
    videoContainer.classList.add("show-video");
    myVideo.play();
  });

  document.addEventListener('mousemove', e => {
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    bg.style.backgroundPosition = `${x}px ${y}px`;
  });

  contactButton.addEventListener('click', () => {
    const display = contactForm.style.display;

    if (display === 'none' || display === '') {
      contactForm.style.display = 'block';
      contactForm.style.top = `${contactButton.offsetTop + contactButton.offsetHeight}px`;
      contactForm.style.left = `${contactButton.offsetLeft}px`;
    } else {
      contactForm.style.display = 'none';
    }
  });

  informationButton.addEventListener('click', () => {
    if (informationMenu.style.display === 'none' || informationMenu.style.display === '') {
      informationMenu.style.display = 'block';
    } else {
      informationMenu.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function(event) {
    const keyName = event.key;

    switch (keyName) {
      case 'z':
      case 'Z':
        accueilButton.click();
        break;
      case 'q':
      case 'Q':
        vitrineButton.click();
        break;
      case 's':
      case 'S':
        aproposButton.click();
        break;
      case 'd':
      case 'D':
        shopButton.click();
        break;
      case 'i':
      case 'I':
      case '!':
        informationButton.click();
        break;
    }
  });
});
