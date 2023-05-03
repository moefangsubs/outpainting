/*--  const program = document.querySelector('.program');
  const minimizeBtn = document.querySelector('#minimize-btn');
  const maximizeBtn = document.querySelector('#maximize-btn');
  const closeBtn = document.querySelector('#close-btn');
  let isMaximized = false;
  let programWidth;
  let programHeight;

  maximizeBtn.addEventListener('click', () => {
    if (isMaximized) {
      program.classList.remove('maximized');
      program.style.width = programWidth;
      program.style.height = programHeight;
      isMaximized = false;
    } else {
      programWidth = program.style.width;
      programHeight = program.style.height;
      program.classList.add('maximized');
      program.style.width = '100%';
      program.style.height = '100%';
      isMaximized = true;
    }
  });


minimizeBtn.addEventListener('click', () => {
    program.classList.add('minimized');
    setTimeout(() => {
      program.style.opacity = 0;
    }, 500);
  });

  closeBtn.addEventListener('click', () => {
    program.remove();
  });
  --*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}


/*--- */

    setInterval(function() {
      var now = moment();
      var clock = document.getElementById("clock");
      clock.innerHTML = now.format("HH:mm:ss");
    }, 1000);
