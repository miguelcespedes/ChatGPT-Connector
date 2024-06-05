## ChatGPT-Connector: Creando un servicio REST con Express que automatiza ChatGPT a través de Puppeteer.

**Descripción del proyecto**

Este proyecto proporciona una aplicación Node.js y una clase `ChatGPTConnector` que te permite interactuar con ChatGPT y obtener respuestas a tus indicaciones.

**Estructura del proyecto**

El proyecto está estructurado de la siguiente manera:

```
ChatGPT-Connector
├── package.json
└── src
  ├── app.js
  └── ChatGPTConnector.js
```

* `package.json` : El archivo de configuración principal del proyecto, que incluye dependencias, scripts y otros metadatos.
* `src` : El directorio fuente que contiene el código JavaScript de la aplicación.
    * `app.js` : El archivo principal de la aplicación Express.js, que maneja el enrutamiento y la interacción con `ChatGPTConnector`.
    * `ChatGPTConnector.js` : La clase responsable de conectarse a ChatGPT, enviar indicaciones y obtener respuestas utilizando Puppeteer.

**Instalación**

Para instalar y ejecutar el proyecto, sigue estos pasos:

**Prerrequisitos:**

* Asegúrate de tener Node.js y npm instalados en tu sistema.

**Instalación de dependencias:**

1. Navega al directorio del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias requeridas:

```bash
npm install
```

Esto instalará la dependencia `puppeteer`, que se utiliza para automatizar las interacciones web con ChatGPT.

**Ejecución de la aplicación:**

Para iniciar el servidor Express.js y hacer que la aplicación sea accesible, ejecuta el siguiente comando:

```bash
npm start
```

Esto iniciará el servidor en el puerto 80 de forma predeterminada. Puedes acceder al punto final `http://localhost/client` para enviar indicaciones a ChatGPT y recibir respuestas.

**Uso**

Para usar el proyecto, puedes enviar solicitudes HTTP GET al punto final `/client` con el parámetro `prompt` que contiene el texto que deseas enviar a ChatGPT. Por ejemplo:

```bash
curl -X GET http://localhost/client?prompt=Hola,%20que%20hora%20ser%C3%A1%20en%20Par%C3%ADs?
```

Esto enviará la indicación "Hola, que hora será en París?" a ChatGPT y devolverá la respuesta en la respuesta.

**Notas adicionales**

* La clase `ChatGPTConnector` está configurada actualmente para usar Puppeteer en modo visible. Es posible que debas ajustar la configuración del modo sin cabeza según tus preferencias.
* Asegúrate de tener una cuenta de ChatGPT y estar conectado antes de usar la aplicación.
* El código proporcionado es un ejemplo básico y se puede ampliar para manejar interacciones y escenarios de error más complejos.

**Siéntete libre de modificar y adaptar el proyecto para que se adapte a tus necesidades y requisitos específicos.**

