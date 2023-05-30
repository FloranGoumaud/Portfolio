document.addEventListener("DOMContentLoaded", function(event) {
  var logo = document.querySelector(".logo");
  var videoContainer = document.querySelector(".video-container");
  var myVideo = document.getElementById("myVideo");

  logo.addEventListener("animationend", function() {
    logo.style.display = "none";
    videoContainer.classList.add("show-video");
    myVideo.play();
  });

  var contactButton = document.getElementById('contactButton');
  var contactForm = document.getElementById('contactForm');

  contactButton.addEventListener('click', function() {
    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
      contactForm.style.display = 'block';
      contactForm.style.top = (contactButton.offsetTop + contactButton.offsetHeight) + 'px';
      contactForm.style.left = contactButton.offsetLeft + 'px';
    } else {
      contactForm.style.display = 'none';
    }
  });
});

console.log('Le script est chargé');
