const puppeteer = require('puppeteer');
const { expect }  = require('chai');
const moment = require('moment');

describe('Automation Test Insurwin with Puppeteer', () => {

    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 3,
            // args: [
            //     '--start-maximized',
            // ],
            defaultViewport: null,
          });
    });

    // afterEach(async () => {
    //     await browser.close();
    // });

    // it('should have the correct page title Insurwin - Home', async () => {
    //     expect(await page.title()).to.eql('Home');
    // });

    // function waitForFrame(page) {
    //     let fulfill;
    //     const promise = new Promise(x => fulfill = x);
    //     checkFrame();
    //     return promise;

    //     function checkFrame() {
    //       const frame = page.frames().find(f => f.name() === 'megapay');
    //       if (frame)
    //         fulfill(frame);
    //       else
    //         page.once('frameattached', checkFrame);
    //     }
    //   }

    it('should show buy health insurance via healcare button', async () => {
      page = await browser.newPage();
      const url2 = 'http://localhost:8003/?apiKey=72120eb0-a008-11ea-8138-e31af9d13021&referral-id=39';
      await page.goto(url2, {
        waitUntil: 'networkidle2',
      });
      await page.waitForSelector('img[src="/static/health-insurance.261a65eb.png"]', {
        visible: true,
      }).then(e => console.log(e));
      // console.log('------------------');
        await page.click('img[src="/static/health-insurance.261a65eb.png"]');
        await page.waitForSelector('button[class="ant-btn ant-btn-primary"]');
        // console.log('------------------------');
        await page.click('button[class="ant-btn ant-btn-primary"]');
        await page.waitForSelector('input[id="policyHolder.fullName"]');
        await page.type('input[id="policyHolder.fullName"]', `${moment().format('DDMMYYYY HHmmss')} Minh autotest`);
        await page.click('span[id="policyHolder.dob"]', '11/09/1997');
        await page.type('.ant-calendar-input', '11/09/1997');
        await page.click('div[id="policyHolder.gender"]');
        await page.type('div[id="policyHolder.gender"]', 'Male');

        await page.click('input[id="policyHolder.nationalId"]');
        await page.type('input[id="policyHolder.nationalId"]', '273666888');

        await page.click('input[id="policyHolder.phoneNumber"]');
        await page.type('input[id="policyHolder.phoneNumber"]', '0971725797');

        await page.click('input[id="policyHolder.email"]');
        await page.type('input[id="policyHolder.email"]', 'minhtran.in@outlook.com');

        await page.click('div[id="policyHolder.city"]');
        await page.type('div[id="policyHolder.city"]', 'Bà Rịa - Vũng Tàu');

        await page.click('div[id="policyHolder.district"]');
        await page.type('div[id="policyHolder.district"]', 'Vũng Tàu');

        await page.click('div[id="policyHolder.ward"]');
        await page.type('div[id="policyHolder.ward"]', '10');
        // await page.type('div[id="policyHolder.gender"]', 'Male');
        await page.click('input[id="policyHolder.address"]');
        await page.type('input[id="policyHolder.address"]', 'H37 Khang Linh');

        await page.click('button[class="ant-btn btn btn-warning btn-block ant-btn-primary ant-btn-lg"]');
        await page.click('button[class="ant-btn btn btn-warning btn-block ant-btn-primary ant-btn-lg"]');

        await page.waitForSelector('input[class="ant-checkbox-input"]');
        await page.click('input[class="ant-checkbox-input"]');
        await page.click('button[class="ant-btn btn btn-primary btn-block ant-btn-primary ant-btn-lg"]');

        await page.waitForSelector('button[class="ant-btn antd-pro-components-payment-modal-style.scss-btnfixed ant-btn-primary ant-btn-lg"]');
        await page.click('button[class="ant-btn antd-pro-components-payment-modal-style.scss-btnfixed ant-btn-primary ant-btn-lg"]');
        page.waitForNavigation({ waitUntil: 'networkidle0' })
        // await page.waitForSelector('iframe[name="megapay"]');
        // await page.waitFor(3000)
        // const frame = await page
        // .frames()
        // .find(f => {
        //     return f;
        // });
        // await frame.type('input[id="searchBank"]', 'H37 Khang Linh');
        await button.click()

        await page.waitFor(2000);
        const frame = await page.frames().find(f => f.name() === 'megapay');
        console.log(frame, '-------------------------');
        // const button = await frame.$('iframe[name="megapay"]');
        // button.click();
        await frame.waitForSelector('input[id="searchBank"]');
        const button = await frame.$('div[id="searchBank"]');

        // const frame = await page.frames().find(f => f.name() === 'megapay');
        // await frame.waitForSelector('div[id="IC"]');
        // const button = await frame.$('#IC');
        // await button.click();
        // const frame = await waitForFrame(page);
        // await frame.waitForSelector('div[id="IC"]');
        // console.log('96');
        // const button = await frame.$('div[id="IC"]');
        // console.log('98');
        // button.click();

        // await page.click('input[id="bankCardNo"]');
        // await page.type('input[id="bankCardNo"]', '4000 0000 0000 0002');

        // await page.click('input[id="bankExprieDate"]');
        // await page.type('input[id="bankExprieDate"]', '11 / 22');

        // await page.click('input[id="bankCardHolder"]');
        // await page.type('input[id="bankCardHolder"]', '123');

        // await page.click('button[id="click_next"]');

    });

    // it('should show a list of results when searching actual word', async () => {
    //     await page.type('input[id=search_form_input_homepage]', 'puppeteer');
    //     await page.click('input[type="submit"]');
    //     await page.waitForSelector('h2 a');
    //     const links = await page.evaluate(() => {
    //         return Array.from(document.querySelectorAll('h2 a'));
    //     });
    //     expect(links.length).to.be.greaterThan(0);
    // });

    // it('should show a warning when searching fake word', async () => {
    //     await page.type('input[id=search_form_input_homepage]', 'pupuppeppeteerteer');
    //     await page.click('input[type="submit"]');
    //     await page.waitForSelector('div[class=msg__wrap]');
    //     const text = await page.evaluate(() => {
    //         return document.querySelector('div[class=msg__wrap]').textContent;
    //     });
    //     expect(text).to.contain('Not many results contain');
    // });

});
