import { test, chromium } from '@playwright/test';

test('test to browse pages', async () => {
  
  const browser = await chromium.launch({ headless: false });
  
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://192.168.1.125:31767/');
  await page.getByRole('textbox', { name: 'User name' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'User name' }).fill('allpermission@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Router' }).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^ZoneSelect \.\.\.$/ }).locator('div').nth(4).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^Bangladesh$/ }).click();
  await page.waitForTimeout(2000);
  await page.locator('.select-wrap > .d-flex.justify-content-between').click();
  await page.locator('.px-4').first().click();
  await page.getByText('Select').nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByText('Gulshan-2 PoP').click();
  await page.getByText('Gulshan-2 PoP').click();
  await page.waitForTimeout(2000);
  await page.locator('.px-4').first().click();
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Package' }).click();
  await page.locator('div').filter({ hasText: /^ZoneSelect \.\.\.$/ }).locator('div').nth(4).click();
  await page.locator('div').filter({ hasText: /^Dhaka$/ }).click();
  await page.getByText('Select').nth(1).click();
  await page.getByText('15Mya_liveTest').click();
  await page.getByText('15Mya_liveTest').click();
  await page.waitForTimeout(2000);
  await page.locator('.select-wrap').first().click();
  await page.locator('.px-4').first().click();
  await page.waitForTimeout(2000);

  await page.locator('span').filter({ hasText: 'adminallpermission@gmail.com' }).getByRole('link').click();

  await context.close();
  await browser.close();
});