import BrowserInitialize from './browser_initializer'
const { setWorldConstructor } = require('cucumber');
const browserInitialize = new BrowserInitialize();
class CustomWorld {
  async openBrowser () {
    // Initialize browser
    const { page, browser } = await browserInitialize.initialize()
    this.page = page
    this.browser = browser
  }

  async closeBrowser () {
    // close the browser
    await browserInitialize.browser.close();
  }

  async GetString (length) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  constructor ({ attach, parameters }) {
    this.attach = attach
    this.parameters = parameters
  }
}
setWorldConstructor(CustomWorld);
