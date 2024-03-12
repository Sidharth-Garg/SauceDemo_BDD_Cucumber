import { expect, type Page, type Locator } from "@playwright/test";

export class loginpage {
  private usernameTextbox: Locator;
  private passwordTextbox: Locator;
  private loginBtn: Locator;
  private page: Page;
  private HomePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextbox = page.getByPlaceholder("Username");
    this.passwordTextbox = page.getByPlaceholder("Password");
    this.loginBtn = page.locator("#login-button");
    this.HomePage = page.getByText("Products");
  }
  async goToUrl() {
    await this.page.goto("https://www.saucedemo.com/");
    await expect(this.page).toHaveURL("https://www.saucedemo.com/");
  }
  async enterUsername(username: string) {
    await this.usernameTextbox.fill(username);
    await expect(this.usernameTextbox).toHaveValue(username);
  }
  async enterPassword(password: string) {
    await this.passwordTextbox.fill(password);
    await expect(this.passwordTextbox).not.toBeEmpty();
  }
  async clickLoginBtn() {
    await expect(this.loginBtn).toBeVisible();
    await this.loginBtn.click();
    await expect(this.HomePage).toBeVisible();
  }
}