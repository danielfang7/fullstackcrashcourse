console.log(`Hello World`);

const btnOpen = document.querySelector(`.btn-open`);
const form = document.querySelector(`.fact-form`);

btnOpen.addEventListener(`click`, () => {
  form.classList.toggle(`hidden`);
  btnOpen.textContent = form.classList.contains(`hidden`)
    ? "Share a fact"
    : "Close";
});

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to ${new Date().getFullYear()}`;
console.log(calcFactAge2(1997)); // returns 27
console.log(calcFactAge2(2026)); // returns `Impossible year. Year needs to be less or equal to 2024`

const fact = ["Fact 1", 2015, true];
const newFact = [...fact, "society"];
console.log(newFact); // logs a new array with ["Fact 1", 2015, true, "society"]
