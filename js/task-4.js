// Знайдемо форму
const form = document.querySelector('.login-form');

// Додаємо обробник події 'submit' на форму
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки при сабміті

  // Отримуємо значення полів форми
  const email = form.elements.email.value.trim();  // Очищаємо від пробілів по краях
  const password = form.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === '' || password === '') {
    alert('All form fields must be filled in'); // Якщо є пусті поля — виводимо попередження
    return;
  }

  // Якщо все заповнено, створюємо об'єкт з введеними даними
  const formData = {
    email: email,
    password: password
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищаємо форму
  form.reset();
});

