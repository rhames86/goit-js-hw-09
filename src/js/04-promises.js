import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const fulfillPromise = () => {
      resolve({ position, delay });
    };
    const rejectPromise = () => {
      reject({ position, delay });
    };

    if (shouldResolve) {
      setTimeout(fulfillPromise, delay);
    } else {
      setTimeout(rejectPromise, delay);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const firstDelay = Number(formData.get('delay'));
    const delayStep = Number(formData.get('step'));
    const amount = Number(formData.get('amount'));

    let currentDelay = firstDelay;
    for (let i = 1; i <= amount; i++) {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      currentDelay += delayStep;
    }
  });
});
