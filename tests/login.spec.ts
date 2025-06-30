import { test, chromium } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.spec.ts';

test('Login with valid credentials', async () => {
  // Launch Chromium browser (not headless for visibility)
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate & login to the site
  const loginPage = new LoginPage(page)
 
  await loginPage.login('http://192.168.1.125:31767/', 'allpermission@gmail.com', '123456');
  await loginPage.saveStorageState('storage/storageState.json');

  await page.waitForTimeout(2000);

  await page.goto('http://192.168.1.125:31767/isp-sms');
  await page.waitForTimeout(2000);

  await page.locator('span').filter({ hasText: 'adminallpermission@gmail.com' }).getByRole('link').click();
  await page.waitForTimeout(5000);

  // 5. Close browser
  await context.close();
  await browser.close();
});
