import "./styles.css";

const slideIndicatorCtn = document.querySelector(".slide-indicator-ctn");
const imageCtn = document.querySelector(".image-ctn");
let numOfSlides = imageCtn.querySelectorAll("img").length;
let currentSlide = 0; //Do not change manually or via assignment. Use the changeIndicator function to change this


function changeIndicator(newSlide) {
    const indicatorBtns = slideIndicatorCtn
    .querySelectorAll(".slide-indicator-ctn > button");
    indicatorBtns[currentSlide].classList.remove("current-indicator-slide");
    indicatorBtns[newSlide].classList.add("current-indicator-slide");
    currentSlide = newSlide;
}

for (let i = 0; i < numOfSlides; i++) {
  const indicatorBtn = document.createElement("button");
  indicatorBtn.setAttribute("data-indicator-index", i);
  slideIndicatorCtn.appendChild(indicatorBtn);
}

changeIndicator(0);

setInterval(() => {
    slideChange(currentSlide + 1);
}, 5000);

slideIndicatorCtn
  .querySelectorAll(".slide-indicator-ctn > button")
  [currentSlide].classList.add("current-indicator-slide");

function slideChange(slideIndex) {
  if (slideIndex >= numOfSlides) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = numOfSlides - 1;
  }

  imageCtn.style.transform = `translate(-${(slideIndex / numOfSlides) * 100}%, 0%)`;
  changeIndicator(slideIndex);
}

document.addEventListener("click", (e) => {
  //Event listener for navigation buttons
  if (e.target.closest(".side-nav-ctn > button")) {
    const modifier = Number(e.target.dataset.indexModifier);
    slideChange(currentSlide + modifier);
  }

  //Event Listener for slide indicator buttons
  if (e.target.closest(".slide-indicator-ctn > button")) {
    const index = Number(e.target.dataset.indicatorIndex);
    slideChange(index);
  }
});
