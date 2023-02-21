var slideIndex = 0;
var slideTimeoutID;
carousel();

function prevSlide() {
  clearTimeout(slideTimeoutID);
  showSlide(slideIndex - 1);
  slideTimeoutID = setTimeout(carousel, 6000); // Change image every 6 seconds
}

function nextSlide() {
  clearTimeout(slideTimeoutID);
  showSlide(slideIndex + 1);
  slideTimeoutID = setTimeout(carousel, 6000); // Change image every 6 seconds
}

function carousel() {
  showSlide(slideIndex + 1);
  // slideTimeoutID = setTimeout(carousel, 6000); // Change image every 6 seconds
}

function showSlide(n) {
  let slides = document.getElementsByClassName("main-capsule");
  let thumbs = document.getElementsByClassName("carousel-thumbs")[0].children;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" focus", "");
  }

  slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.opacity = "1";
  thumbs[slideIndex - 1].className += " focus";
}

// ----

