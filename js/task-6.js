// Функція для генерації випадкового кольору у hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи DOM
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  const elements = []; // Массив для зберігання елементів
  let boxSize = 30; // Початковий розмір для першого div

  // Створюємо стільки елементів, скільки вказано в amount
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    boxSize += 10; // Збільшуємо розмір наступного div
  }

  // Додаємо елементи до DOM за одну операцію
  boxesContainer.append(...elements);
}

// Функція для очищення колекції
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
}

// Обробник події для кнопки "Create"
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10); // Отримуємо значення з input

  // Перевірка, чи введене число в межах 1-100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо колекцію
    input.value = ''; // Очищаємо поле вводу після створення
  } else {
    alert('Please enter a number between 1 and 100'); // Повідомлення про помилку
  }
});

// Обробник події для кнопки "Destroy"
destroyButton.addEventListener('click', destroyBoxes);
