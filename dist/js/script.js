document.addEventListener('DOMContentLoaded', () => {
   const openOrderModalButton = document.getElementById('openmodal');
   const orderModal = document.getElementById('basket');
   const thankYouModal = document.getElementById('price__thanks');
   const closeModalButtons = document.querySelectorAll('.price__close-thanks,.close');
   const orderForm = document.getElementById('basket_form');

   // Открытие модального окна формы заказа
   openOrderModalButton.addEventListener('click', () => {
      orderModal.style.display = 'block';
   });

   // Закрытие модальных окон при нажатии на крестик
   closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
         orderModal.style.display = 'none';
         thankYouModal.style.display = 'none';
      });
   });

   // Закрытие модальных окон при клике вне их области
   window.addEventListener('click', (event) => {
      if (event.target === orderModal) {
         orderModal.style.display = 'none';
      }
      if (event.target === thankYouModal) {
         thankYouModal.style.display = 'none';
      }
   });

   // Обработка отправки формы
   orderForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Предотвращаем отправку формы
      orderModal.style.display = 'none'; // Скрываем модальное окно формы заказа
      thankYouModal.style.display = 'flex'; // Отображаем модальное окно с благодарностью
   });
});


const button = document.getElementById('scrollabout');
const targetSection = document.getElementById('about');

button.addEventListener('click', () => {
   targetSection.scrollIntoView({ behavior: 'smooth' });
});

