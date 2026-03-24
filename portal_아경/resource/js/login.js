const slider = document.querySelector('.banner-slider');
const dots = document.querySelectorAll('.dot');
const arrows = document.querySelectorAll('.banner-arrow');
const pauseBtn = document.querySelector('.banner-pause');
const total = document.querySelectorAll('.banner-slide').length;
let current = 0;
let isPaused = false;
let timer;

function goTo(index) {
  current = (index + total) % total;
  slider.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

function startAuto() {
  timer = setInterval(() => { if (!isPaused) goTo(current + 1); }, 3000);
}

arrows[0].addEventListener('click', () => goTo(current - 1));
arrows[1].addEventListener('click', () => goTo(current + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.classList.toggle('is-paused', isPaused);
});

startAuto();
