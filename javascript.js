let adviceCounter = document.querySelector(".advice-counter");
const text = document.querySelector(".text");
const btn = document.querySelector(".dice-container");
const url = "https://api.adviceslip.com/advice";
let placeHolder = '1';

let advice = () => {
    text.classList.remove("fade");
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        text.textContent = item.slip.advice;
        adviceCounter.textContent = placeHolder++;
        text.classList.add("fade");
    });
};

btn.addEventListener('click', advice)

advice();