const { BeforeStep, Before, After, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const { PoManager } = require('../../pageObjects/PoManager.js');

Before(async function(){
    this.browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.poManager = new PoManager(this.page);
});

After(async function(){
    this.browser.close();
});

BeforeStep(async function(){

});

AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path: 'SS.png'});
    }
})