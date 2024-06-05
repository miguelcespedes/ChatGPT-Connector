// src/ChatGPTConnector.js
const puppeteer = require('puppeteer');

class ChatGPTConnector {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async connect() {
    // Iniciando Puppeteer en modo visible
    console.log(1, 'Iniciando Puppeteer en modo visible...');
    this.browser = await puppeteer.launch({ headless: false }); // Modo visible

    // Abriendo una nueva página
    console.log(2, 'Abriendo una nueva página...');
    this.page = await this.browser.newPage();

    // Navegando a la página de inicio de sesión de ChatGPT (reemplazar con la URL real si es necesario)
    console.log(3, 'Navegando a la página de inicio de sesión de ChatGPT...');
    await this.page.goto('https://chat.openai.com/auth/login');
  }

  async disconnect() {
    // Cerrando el navegador
    if (this.browser) {
      console.log(4, 'Cerrando el navegador...');
      await this.browser.close();
    }
  }

  async getChatGPTResponseHTML(prompt) {
    // Accediendo al campo de entrada de texto del usuario (reemplazar con el selector real si es necesario)
    console.log(3.1, 'Buscando campo de entrada de texto...');
    const inputElement = await this.page.waitForSelector('textarea');

    // Preparando el texto de tu pregunta (reemplazar con la lógica real de la pregunta)
    console.log(3.2, 'Pregunta preparada:', prompt);

    // Ingresando la pregunta
    console.log(3.3, 'Escribiendo la pregunta en el campo de entrada...');
    await inputElement.type(prompt);

    // Enviando la pregunta (activando la respuesta)
    console.log(3.4, 'Presionando Enter para enviar la pregunta...');
    await this.page.keyboard.press('Enter');

    // Esperando el botón "Espera máximo 60 segundos" (reemplazar con el selector real si es necesario)
    const waitButtonSelector = '.rounded-md'; // Selector de ejemplo
    console.log(3.5, 'Esperando maximo 60 segundo hasta que aparezca el boton...');
    const waitButton = await this.page.waitForSelector(waitButtonSelector, { timeout: 60000 }); // 60 segundos

    // Si el botón aparece, continúa con la extracción del HTML de la respuesta
    if (waitButton) {
      // Esperando el contenedor de texto de respuesta (reemplazar con el selector real)
      const responseContainerSelector = 'div.markdown'; // Selector de ejemplo
      console.log(3.6, 'Esperando a que aparezca el contenedor de respuesta...');
      await this.page.waitForSelector(responseContainerSelector);

      // Extrayendo el texto de la respuesta y guardándolo en la variable responseText
      console.log(3.7, 'Extrayendo el texto de la respuesta...');
      const responseHTML = await this.page.$eval(responseContainerSelector, el => el.innerHTML);

      return responseHTML; // Regresa el responseHTML
    } else {
      // Si el botón no aparece, indica un error
      console.error(3.8, 'GPT no respondió correctamente.');
      return null; // Regresa null para indicar un error
    }
  }

}

module.exports = ChatGPTConnector;
