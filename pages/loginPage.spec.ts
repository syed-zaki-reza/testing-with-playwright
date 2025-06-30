export class LoginPage {
  constructor(private page: Page) {}

  async login(url: string, username: string, password: string) {
    await this.page.goto(url);
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button:has-text("Sign In")');
    await this.page.waitForNavigation();
  }

  async saveStorageState(path: string) {
    await this.page.context().storageState({ path });
  }
}
