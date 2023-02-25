let slideIndex = 0;
let slideTimeoutID;
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
  let slides = document.getElementsByClassName("main-capsule");
  let thumbs = document.getElementsByClassName("carousel-thumbs")[0].children;
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" focus", "");
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

  slides[slideIndex - 1].className += " focus";
  thumbs[slideIndex - 1].className += " focus";
}

function changeMainImage(element, mainImageID) {
  let overlay = document.getElementById(`${mainImageID}-overlay`);
  let mainImage = document.getElementById(mainImageID);
  overlay.src = element.getElementsByTagName("img")[0].src;
  mainImage.style.opacity = 0;
  overlay.style.opacity = 1;
}

function resetMainImage(mainImageID) {
  let overlay = document.getElementById(`${mainImageID}-overlay`);
  let mainImage = document.getElementById(mainImageID);
  mainImage.style.opacity = 1;
  overlay.style.opacity = 0;
}

let globalHoverID;
function showGlobalHover() {
  clearTimeout(slideTimeoutID);
  globalHoverID = setTimeout(() => {
    document.getElementById(`global-hover`).style.opacity = 1;
  }, 300);
}

function hideGlobalHover() {
  clearTimeout(globalHoverID);
  document.getElementById(`global-hover`).style.opacity = 0;
  slideTimeoutID = setTimeout(carousel, 6000); // Change image every 6 seconds
}
