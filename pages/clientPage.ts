import { Page } from '@playwright/test';

export class ClientPage {
  constructor(private page: Page) {}

  async navigateToClientPage() {
    await this.page.waitForTimeout(2000);
    await this.page.goto('http://192.168.1.125:31767/client');
  }

  async openAddClientForm() {
    await this.page.getByRole('button', { name: 'Add Client' }).click();
    await this.page.waitForTimeout(2000);
  }

  async fillClientForm(clientData: any) {
    const page = this.page;

    await page.locator('input[name="fullName"]').fill(clientData.fullName);
    await page.locator('input[name="phone"]').fill(clientData.phone);
    await page.locator('input[name="nationalId"]').fill(clientData.nationalId);

    await page.locator('#serviceStart').click();
    await page.locator('div:nth-child(3) > svg').click();
    await page.getByText(clientData.serviceDay, { exact: true }).click();
    await page.getByRole('button', { name: clientData.hour }).click();
    await page.getByRole('button', { name: clientData.minute }).click();

/*     
    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Associate ID and Name\Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.associate}$`) }).click();
*/

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Router\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.router}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Package\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.package}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Connection Type\*Select \.\.\.$/ }).getByRole('img').click();
    await page.getByText(clientData.connectionType).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Key Account Manager \(KAM\)\*Select \.\.\.$/ }).locator('span').nth(2).click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.kam}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Client Connectivity Type\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.connectivityType}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Auto Due Allowed\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.autoDueAllowed}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Subscription\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.subscription}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Enable SMS Notification\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('span').filter({ hasText: clientData.sms }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Account Service\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.accountService}$`) }).click();

    await this.page.waitForTimeout(2000);
    await page.locator('div').filter({ hasText: /^Auto Recharge\*Select \.\.\.$/ }).getByRole('img').click();
    await page.locator('div').filter({ hasText: new RegExp(`^${clientData.autoRecharge}$`) }).click();

    await page.locator('input[name="email"]').fill(clientData.email);
  }

  async saveClient() {
    const page = this.page;
    await page.getByRole('button', { name: 'Save Client' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
  }
}
