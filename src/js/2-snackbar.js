// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = Number(form.delay.value);
  const state = form.state.value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  })
    .then(delay =>
      iziToast.show({
        title: '✅',
        message: ` Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(delay => {
      iziToast.show({
        title: '❌',
        message: ` Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
