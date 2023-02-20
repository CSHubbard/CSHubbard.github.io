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
  slideTimeoutID = setTimeout(carousel, 6000); // Change image every 6 seconds
}

function showSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  let thumbs = document.getElementsByClassName("carousel-thumbs")[0].children;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
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

  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " focus";
}

// ----

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function currentDiv(n) {
//   showDivs((slideIndex = n));
// }

// function showDivs(n) {
//   let i;
//   let x = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " w3-white";
// }
