
// Отримуємо список категорій
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Для кожної категорії виводимо текст заголовка та кількість елементів у категорії
categories.forEach(category => {
  const title = category.querySelector('h2').textContent; // Текст заголовка
  const itemsCount = category.querySelectorAll('ul li').length; // Кількість елементів у категорії
  console.log(`Category: ${title}
     Elements: ${itemsCount}`);
});
