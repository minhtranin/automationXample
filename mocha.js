require('chromedriver');
const { Builder, By, Key, util } = require('selenium-webdriver');
async function insurwin() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:8003/?apiKey=72120eb0-a008-11ea-8138-e31af9d13021&referral-id=39")

}
insurwin();
