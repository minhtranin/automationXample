const puppeteer = require('puppeteer');

describe('Login', () => {
    let browser;
    let page;

    beforeEach(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 30,
      });
    });
    it('should login successfully', async () => {
      const page = await browser.newPage();
      if (url) {
        await page.goto('');
      }
      await page.setViewport({ width: 1366, height: 768 });
      });



    })
