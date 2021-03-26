const puppeteer = require('puppeteer');
const { expect }  = require('chai');
const moment = require('moment');

describe('Automation Test Create Policy New Status with Puppeteer', () => {

    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            args: [
                '--start-maximized',
            ],
            defaultViewport: null,
          });
    });

    const defaultData = {
        currency: 'USD',
        language: '',
      };
    it('should show 5 polices new status', async () => {
        page = await browser.newPage();
        const uat = 'https://uat-insurtech.savemoney.vn/';
        const local = 'http://localhost:8000/'
        const host = local;


        const url2 = `${host}#/user/login`;
        await page.goto(url2);
        await page.waitForSelector('#username');
        await page.type('#username', 'unit_test_uw_staff@gmail.com');
        await page.waitForSelector('#password');
        await page.type('#password', 'savemoney123');
        await page.click('button[type="submit"]');
        await page.waitForSelector('.ant-layout-content');
        await page.goto(`${host}#/policies`);
        // await page.reload();
        await page.waitForSelector('.btnAddPolicy');
        await page.click('.btnAddPolicy');
        await page.waitForSelector('.ant-modal-content');
        await page.click('#currency');
        await page.click('.selectCurrencyVND');

        await page.waitForSelector('#product_id');
        await page.click('#product_id');

        await page.waitForSelector('.selectProductHPC');
        await page.click('.selectProductHPC');
        await page.click('.page-title');
        await page.waitForSelector('.btnSaveProductAndContinue');
        await page.click('.btnSaveProductAndContinue');
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // page.url().then(e => console.log(e))
        const currentUrl = page.url();
        // console.log(page.url())
        const holderUrl = currentUrl.replace('general', 'holder');
        await page.goto(holderUrl);
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // await page.reload();
        // console.log(page.url())
        await page.waitForSelector('input[class="ant-input ant-select-search__field"]');

        await page.click('input[class="ant-input ant-select-search__field"]');
        await page.type('input[class="ant-input ant-select-search__field"]', 'i');

        await page.waitForSelector('li[class="ant-select-dropdown-menu-item ac-insured-elem ant-select-dropdown-menu-item-active"]');
        await page.click('li[class="ant-select-dropdown-menu-item ac-insured-elem ant-select-dropdown-menu-item-active"]');

        await page.click('button[class="ant-btn ant-btn-primary"]');

        const insureUrl = currentUrl.replace('general', 'insure');
        // console.log(insureUrl);
        await page.goto(insureUrl);

        await page.waitForSelector('.addInsuredBtn');
        await page.click('.addInsuredBtn');

        await page.waitForSelector('.ant-modal-content');
        await page.click('div[id="human.relative_to_policy_holder"]');
        await page.type('div[id="human.relative_to_policy_holder"]', 'Yourself');
        // div[id="plan_id"]
        const plainList = await page.$$('div[id="plan_id"]');
        console.log(plainList.length, '---');
        await plainList[0].click();

        await page.click('span[id="effective_date"]');
        const year = new Date().getFullYear();
        const month = `${new Date().getMonth() + 1}`;
        const day = new Date().getDate() + 1;
        const effectivedate = `${year}-${month.length === 1 ? '0' : ''}${month}-${day} 00:00:00`;
        await page.type('span[id="effective_date"]', effectivedate);
        console.log(effectivedate);
        await page.click('button[class="ant-btn sm_test_calculate"]');

        const resultText = await page.evaluate(() => document.querySelectorAll('button[class="ant-btn ant-btn-primary"]')[1]);

        await resultText.click();
        // await page.click('button[ant-click-animating-without-extra-node="false"]');
        // await page.type('#code', 'i');
        // await page.click('.selectCurrency');
        // await page.waitForSelector(`.selectCurrency${defaultData.currency}`);
        // await page.click(`.selectCurrency${defaultData.currency}`);
        // await page.click('.titleAddPolicy');

        // // await page.click('#currency');
        // await page.type('input[id="currency"]', 'VND');
    });


});

  getInnerText = async (page, element) => {
    return page.evaluate(selector => (document.querySelector(selector).innerText), element);
  },
  getInnerHtml = async (page, element) => {
    return page.evaluate(selector => (document.querySelector(selector).innerHTML), element);
  }
