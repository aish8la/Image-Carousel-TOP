import "./styles.css";

const nextBtn = document.querySelector(".next-img-btn");
const previous = document.querySelector(".previous-btn");
const imageCtn = document.querySelector(".image-ctn");
let rightValue = 0;

function nextClick() {
    rightValue += ((1 / 6) * 100);
    imageCtn.setAttribute("style", `transform: translate(-${rightValue}%, 0%)`);
}

nextBtn.addEventListener("click", nextClick);