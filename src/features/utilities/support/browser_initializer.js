import puppeteer from 'puppeteer'
import { setDefaultTimeout } from 'cucumber'
setDefaultTimeout(30000) // Default timeout for puppeteer is 30s which is too less to load sendoso web pages
class BrowserInitialize {
  async initialize () {
    this.browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 0,
      timeout: 30000,
      executablePath: process.env.PUPPETEER_EXEC_PATH,
      args: ['--start-fullscreen',
        '--ignore-certificate-errors',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--hide-scrollbars',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--override-plugin-power-saver-for-testing=never',
        '--disable-extensions-http-throttling',
        '--disable-backgrounding-occluded-windows'
      ],
      defaultViewport: null
    })
    const pages = await this.browser.pages();
    this.page = pages[0];
    this.page.setDefaultNavigationTimeout(0)
    this.page.setDefaultTimeout(0);
    this.page.setUserAgent('UA-TEST');
    return { page: this.page, browser: this.browser }
  }
}
export default BrowserInitialize
