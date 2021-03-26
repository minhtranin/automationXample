const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8003/?apiKey=72120eb0-a008-11ea-8138-e31af9d13021');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
