import { test, chromium } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.spec.ts';
import { ClientPage } from '../pages/clientPage';
import clientData from '../storage/clientData1.json';

test.setTimeout(100000);

test('Add New Client', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const clientPage = new ClientPage(page);

  await loginPage.login('http://192.168.1.125:31767/', 'allpermission@gmail.com', '123456');
  await loginPage.saveStorageState('storage/storageState.json');

  await clientPage.navigateToClientPage();
  await clientPage.openAddClientForm();
  await clientPage.fillClientForm(clientData);
  await clientPage.saveClient();

  // await page.pause();

  await context.close();
  await browser.close();
});