
// const btn = document.getElementById('open-modal');
// const modal = document.getElementById('modal');

// const closeBtn = document.querySelector('.modal_close');

// btn.onclick = () => {
//   modal.classList.add('modal_active');
//   closeBtn.addEventListener('click', closeModal);
//   modal.addEventListener('click', hideModal);

//   function closeModal() {
//     modal.classList.remove('modal_active');
//     closeBtn.removeEventListener('click', closeModal);
//   }

//   function hideModal(event) {
//     if (event.target === modal) {
//       closeModal();
//     }
//   }
// }

let slideIndex = 1;
showSlides(slideIndex);

// Далее/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

