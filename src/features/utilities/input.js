import clickUtility from './click_utility';
class Input {

  async getElementText (page, element) {
    try {
      await page.waitForSelector(element)
      return await page.$eval(element, element => element.textContent)
    } catch (errorMessage) {
      throw new Error('Unable to get the text of element ' + errorMessage)
    }
  }

  async getAllElementText (page, element) {
    let linkTexts = await page.$$eval(element, (elements) =>
      elements.map((item) => item.textContent)
    );

    linkTexts = linkTexts
      .toString()
      .trim()
      .replace(/(\r\n|\n|\r)/gm, '');
    linkTexts = linkTexts.replace(/ /g, '');
    return await linkTexts;
  }

  async getElementTextUsingXpath (page, xpath) {
    try {
      await page.waitForXPath(xpath)
      const elementXpath = await page.$x(xpath);
      const xpathTextContent = await elementXpath[0].getProperty('textContent')
      const xpathText = xpathTextContent.jsonValue();
      return xpathText;
    } catch (errorMessage) {
      throw new Error('Unable to get the text of element ' + errorMessage)
    }
  }

  async enterTextViaKeyboardUsingXpath (page, elementXpath, text) {
    await clickUtility.clickElementByXpath(page, elementXpath)
    await page.keyboard.type(text)
  }

  async enterText (page, element, value) {
    try {
      await page.waitForSelector(element)
      await page.type(element, value, { delay: 30 })
    } catch (errorMessage) {
      throw new Error(`Unable to enter ${value}, Inside locator: ${element}, errorMessage: ${errorMessage}`)
    }
  }

  async enterTextXpath (page, element, value) {
    try {
      await page.waitForXPath(element)
      const elements = await page.$x(element)
      await elements[0].click()
      await elements[0].type(value)
    } catch (errorMessage) {
      throw new Error(`Unable to enter ${value}, Inside locator: ${element}, errorMessage: ${errorMessage}`)
    }
  }

  async clearXPathInputField (page, element) {
    await page.waitForXPath(element)
    const elements = await page.$x(element)
    await elements[0].click({ clickCount: 2 })
    await page.keyboard.down('Shift')
    await page.keyboard.press('ArrowUp')
    await page.keyboard.press('Backspace')
  }

}

export default new Input()
