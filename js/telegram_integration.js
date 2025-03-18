/**
 * Заглушка для Telegram Web App API
 * (для тестирования в браузере без Telegram)
 */

// Глобальный объект с тестовыми данными
window.mockedTelegramUser = {
  id: "test_user_123456789",
  first_name: "Тестовый",
  last_name: "Пользователь",
  username: "@test_user",
  language_code: "ru",
  is_premium: false,
  photo_url: "",
};

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  console.log("Используем заглушку для Telegram WebApp");
});

/**
 * Объект для взаимодействия с Flutter приложением
 */
window.TelegramWebApp = {
  /**
   * Получение данных пользователя (мокированных)
   * @returns {string} JSON с данными пользователя
   */
  getUserData: function () {
    console.log("Запрос данных пользователя (тестовый режим)");
    return JSON.stringify(window.mockedTelegramUser);
  },

  /**
   * Закрыть приложение (заглушка)
   */
  close: function () {
    console.log("Закрытие приложения (тестовый режим)");
  },

  /**
   * Показать всплывающее сообщение (заглушка)
   * @param {string} message Текст сообщения
   */
  showAlert: function (message) {
    console.log("Сообщение (тестовый режим): " + message);
    alert(message);
  },

  /**
   * Показать главную кнопку (заглушка)
   * @param {string} text Текст кнопки
   */
  showMainButton: function (text) {
    console.log("Показать главную кнопку (тестовый режим): " + text);
  },

  /**
   * Скрыть главную кнопку (заглушка)
   */
  hideMainButton: function () {
    console.log("Скрыть главную кнопку (тестовый режим)");
  },
};
