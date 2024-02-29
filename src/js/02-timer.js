import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', () => {
  const dateTimePicker = document.getElementById('datetime-picker');
  const startButton = document.querySelector('[data-start]');
  const timerDiv = document.querySelector('.timer');

  let intervalId;

  const addLeadingZero = value => String(value).padStart(2, '0');

  const updateTimer = endTime => {
    const difference = endTime - Date.now();
    if (difference <= 0) {
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(difference);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  };

  startButton.addEventListener('click', () => {
    const selectedDate = new Date(dateTimePicker.value).getTime();
    intervalId = setInterval(() => {
      updateTimer(selectedDate);
    }, 1000);
  });
  const convertMs = ms => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
  };

  flatpickr(dateTimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: selectedDates => {
      if (selectedDates.length > 0 && selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future.');
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  });
});
