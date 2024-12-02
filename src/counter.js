export function setupCounter(element, cow, milk) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `milk ${counter}`
  }

  function removeMilk(milk) {
    milk.classList.remove('display_milk')
  }

  function displayMilk(milk) {
    milk.classList.add('display_milk');
    setTimeout(() => removeMilk(milk), 200);
  }

  cow.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  cow.addEventListener('click', () => displayMilk(milk))

}
