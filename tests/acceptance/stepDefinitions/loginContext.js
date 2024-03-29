// import {Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "@playwright/test";
const {  Given ,When,Then} = require("@cucumber/cucumber");
const {expect} =require("@playwright/test");
Given("User has opened Sauce Demo site on the browser", async function () {
  await page.goto("https://www.saucedemo.com/");
  await expect(page.locator(".login_logo")).toBeVisible();
});

When(
  "User enter valid username {string} and password {string}",
  async function (string, string2) {
    await expect(page.locator("#user-name")).toBeVisible();
    await page.fill("#user-name", string);
    await expect(page.locator("#user-name")).toHaveValue(string);
    await expect(page.locator("#password")).toBeVisible();
    await page.fill("#password", string2);
    await expect(page.locator("#password")).toHaveValue(string2);
  }
);

When("User clicks the login button", async function () {
  await expect(page.locator("#login-button")).toBeVisible();
  await page.click("#login-button");
});

Then("Checking Swag Labs title at the top of the page", async function () {
  await expect(page.locator(".app_logo")).toBeVisible();
});

When(
  "User enter invalid username {string} and password {string}",
  async function (string, string2) {
    await expect(page.locator("#user-name")).toBeVisible();
    await page.fill("#user-name", string);
    await expect(page.locator("#user-name")).toHaveValue(string);
    await expect(page.locator("#password")).toBeVisible();
    await page.fill("#password", string2);
    await expect(page.locator("#password")).toHaveValue(string2);
  }
);

Then(
  "Checking for message - Epic sadface: Sorry, this user has been locked out.",
  async function () {
    await expect(
      page.locator('[class="error-message-container error"]>h3')
    ).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  }
);
When(
  "User enter problem username {string} and password {string}",
  async function (string, string2) {
    await expect(page.locator("#user-name")).toBeVisible();
    await page.fill("#user-name", string);
    await expect(page.locator("#user-name")).toHaveValue(string);
    await expect(page.locator("#password")).toBeVisible();
    await page.fill("#password", string2);
    await expect(page.locator("#password")).toHaveValue(string2);
  }
);

Then("Checking for image src value", async function () {
  var src = await page
    .locator("#item_4_img_link>img")
    .getAttribute("src");
  await expect(src).toBe("/static/media/sl-404.168b1cce.jpg");
});
