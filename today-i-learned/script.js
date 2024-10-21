console.log(`Hello World`);

const btnOpen = document.querySelector(`.btn-open`);
const form = document.querySelector(`.fact-form`);

btnOpen.addEventListener(`click`, () => {
  form.classList.toggle(`hidden`);
  btnOpen.textContent = form.classList.contains(`hidden`)
    ? "Share a fact"
    : "Close";
});
