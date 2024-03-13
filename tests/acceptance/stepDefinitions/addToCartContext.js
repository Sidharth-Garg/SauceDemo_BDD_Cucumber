// import {Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
const {  When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
When('User click on product with name {string}',
  async function (string) {
    const itemList = await page.locator('.inventory_item_name ');
    const listSize = await itemList.count();
    for (let i = 0; i < listSize; i++) {
      const element = await itemList.nth(i);
      const text = await element.textContent();
      if (text == string) {
        await expect(element).toBeVisible();
        await element.click();
        break;
      }
    }
  }
);
When('User click on add to cart button', async function () {
  await expect(page.locator('#add-to-cart-sauce-labs-onesie')).toBeVisible();
  await page.locator('#add-to-cart-sauce-labs-onesie').click();
});
When("User clicks on cart icon", async function () {
  await expect(page.locator('.shopping_cart_link')).toBeVisible();
  await page.locator('.shopping_cart_link').click();
});

Then("Checking the title of the cart page", async function () {
  await expect(page.locator('.title')).toHaveText("Your Cart");
});

Then('Checking the details of the product name {string} and price {string} and desc {string} in product page',async function (string, string2, string3) {     
 await expect(page.locator('[class="inventory_details_name large_size"]')).toHaveText(string);
 await expect(page.locator('[class="inventory_details_price"]')).toHaveText(string2);
 await expect(page.locator('[class="inventory_details_desc large_size"]')).toHaveText(string3);
});
Then('Checking the details of the product name {string} and price {string} and desc {string} on the page',async function (string, string2, string3) {     
  await expect(page.locator('.inventory_item_name')).toHaveText(string);
  await expect(page.locator('.inventory_item_price')).toHaveText(string2);
  await expect(page.locator('.inventory_item_desc')).toHaveText(string3);
 });

 When('User clicks on checkout button', async function () {
  await expect(page.locator('#checkout')).toBeVisible();
  await page.locator('#checkout').click();
});
Then("Checking the title of the checkout page", async function () {
  await expect(page.locator('.title')).toHaveText("Checkout: Your Information");
});
When('User enter firstname {string}',async function (string) {
  await expect(global.page.locator("#first-name")).toBeVisible();
    await global.page.fill("#first-name", string);
    await expect(global.page.locator("#first-name")).toHaveValue(string);
});
When('User enter lastname {string}',async function (string) {
  await expect(global.page.locator("#last-name")).toBeVisible();
    await global.page.fill("#last-name", string);
    await expect(global.page.locator("#last-name")).toHaveValue(string);
});
When('User enter postal code {string}',async function (string) {
  await expect(global.page.locator("#postal-code")).toBeVisible();
    await global.page.fill("#postal-code", string);
    await expect(global.page.locator("#postal-code")).toHaveValue(string);
});
When('User clicks on continue button',async function () {
  await expect(page.locator('#continue')).toBeVisible();
  await page.locator('#continue').click();
});
Then('Checking the title of the checkout overview page',async function () {
  await expect(page.locator('.title')).toHaveText("Checkout: Overview");
});
Then('Checking the multiple details like shipping , payment information , total',async function () {
  await expect(page.getByText('Payment Information')).toBeVisible();
  await expect(page.getByText('Shipping Information')).toBeVisible();
  await expect(page.getByText('Price Total')).toBeVisible();
  await expect(page.locator('[class="summary_info_label summary_total_label"]')).toContainText( "Total:" );
});
When('User clicks on Finish button',async function () {
  await expect(page.locator('#finish')).toBeVisible();
  await page.locator('#finish').click();
});
Then('Checking the title of checkout complete page',async function () {
  await expect(page.locator('.title')).toHaveText("Checkout: Complete!");
});
Then('Checking for the order placed message',async function () {
  await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
});
When('User clicks on Home Page button',async function () {
  await expect(page.locator('#back-to-products')).toBeVisible();
  await page.locator('#back-to-products').click();
});