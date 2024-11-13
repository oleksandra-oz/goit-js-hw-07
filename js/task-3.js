// Знаходимо елементи input та span
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо слухач події 'input'
nameInput.addEventListener('input', () => {
  // Отримуємо значення з input та видаляємо пробіли з обох країв
  const inputValue = nameInput.value.trim();

  // Якщо інпут порожній або складається лише з пробілів
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous'; // Встановлюємо "Anonymous"
  } else {
    nameOutput.textContent = inputValue; // Встановлюємо введене ім'я
  }
});
