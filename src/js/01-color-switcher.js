import '../css/common.css';
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let intervalId = null;
const refs = {
    buttonStart: document.querySelector("button[data-start]"),
    buttonStop: document.querySelector("button[data-stop]"),
    body: document.querySelector("body")
};
refs.buttonStop.disabled = true;

function randomBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor();

}
refs.buttonStart.addEventListener('click', () => {
    intervalId = setInterval(randomBodyColor, 1000);
    refs.buttonStart.disabled = true;
    refs.buttonStop.disabled = false;

})
refs.buttonStop.addEventListener("click", () => {
    refs.buttonStart.disabled = false;
    refs.buttonStop.disabled = true;
    clearInterval(intervalId);
});
