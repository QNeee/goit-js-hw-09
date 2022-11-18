import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");
let firstDelayInput = null;
let stepDelayInput = null;
let amountInput = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function thenCatch(e) {
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  firstDelayInput = Number(delay.value);
  stepDelayInput = Number(step.value);
  amountInput = Number(amount.value);
  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, firstDelayInput)
      .then(onSuccess)
      .catch(onError);

    firstDelayInput += stepDelayInput;
  }
}
function onSubmit(e) {
  e.preventDefault();
  thenCatch(e);
  e.target.reset();
}
function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
form.addEventListener('submit', onSubmit);