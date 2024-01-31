const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('A login to Ecommerce application with {string} and {string}', {timeout: 10 *1000}, async function (userName, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(userName, password);
});

When('Add {string} to cart', async function (productName) {
    const dashboardPage = this.poManager.getdashboardPage();
    await dashboardPage.addProductToCart(productName);
    await dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed on cart section', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.checkoutProduct(productName);
});

When('Enter valid details and place an order', {timeout: 10 *1000}, async function () {
    const paymentPage = this.poManager.getPaymentPage();
    await paymentPage.applyCoupon();
    await paymentPage.selectCountryFromDropdown();
    await paymentPage.placeTheOrder();
});

Then('Verify order is present in the order history', async function () {
    const orderSummaryPage = this.poManager.getOrderSummaryPage();
    const orderHistoryPage = this.poManager.getorderHistoryPage();
    await orderSummaryPage.orderValidation();
    var orderId = await orderSummaryPage.orderIdRetrival();
    await orderSummaryPage.navigateToOrderHistoryPage();
    await orderHistoryPage.viewOrderedItem(orderId);
});


Given('A login to Ecommerce2 application with {string} and {string}', async function (userName, password) {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await this.page.title());
    await expect(this.page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await this.page.locator('input#username').fill(userName);
    await this.page.locator('input#password').fill(password);
    await this.page.locator('[name="signin"]').click();
});

Then('verify error message is displayed', async function () {
    await expect(this.page.locator('[style*="block"]')).toContainText('Incorrect');
});