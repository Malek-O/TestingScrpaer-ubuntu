const puppeteer = require("puppeteer")
const fs = require('fs');
    (async () => {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        });
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.waitForSelector('h1');
        const h1Text = await page.$eval('h1', element => element.textContent.trim());
        fs.appendFileSync('h1_text.txt', h1Text);
        await browser.close();
    })();