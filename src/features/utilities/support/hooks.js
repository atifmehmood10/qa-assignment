import { After, Before } from 'cucumber';

Before("@UITest",async function () {
  await this.openBrowser();
});

const options = {
  path: 'src/data/failedScreenshot.png',
  fullPage: true,
  omitBackground: false
}

After("@UITest",async function (scenario) {
  if (scenario.result.status === 'failed') {
    const url = await this.page.url();
    const title = await this.page.title();
    await this.page.on('console', (msg) => console.log('CONSOLE LOGS:' + msg.text()));
    await this.page.waitForTimeout(5000);
    const screenShot = await this.page.screenshot(options);
    this.attach(screenShot, 'image/png')
    this.attach(url)
    this.attach(title)
  }
  await this.closeBrowser();
});
