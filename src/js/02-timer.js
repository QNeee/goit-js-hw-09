import '../css/common.css';
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        timer.targetTime = selectedDates[0].getTime();
        if (timer.targetTime - Date.now() <= 0) {
            return alert("Please choose a date in the future");
        }
        refs.buttonStart.disabled = false;
    },
};
const refs = {
    flatpicker: document.querySelector("#datetime-picker"),
    buttonStart: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
};

refs.buttonStart.disabled = true;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
flatpickr('#datetime-picker', options);
const timer = {
    intervalId: null,
    targetTime: null,
    start() {

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const delatTime = this.targetTime - currentTime;
            const clockTime = convertMs(delatTime);
            updateClockFace(clockTime);
            if (
                refs.days.textContent === '00' &&
                refs.hours.textContent === '00' &&
                refs.minutes.textContent === '00' &&
                refs.seconds.textContent === '00'
            ) {
                return clearInterval(this.intervalId);

            }
        }, 1000);
        refs.buttonStart.disabled = true;
    },

};

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}
refs.buttonStart.addEventListener("click", () => {
    timer.start();
})