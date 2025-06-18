import { test, chromium } from '@playwright/test';

test('Login with valid credentials in Incognito mode', async () => {
  // Launch Chromium browser (not headless for visibility)
  const browser = await chromium.launch({ headless: false });

  // Create a new incognito browser context
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Navigate to login page
  await page.goto('http://192.168.1.125:31767/');
  await page.waitForTimeout(5000); // Wait 5 sec to observe page load

  // 2. Fill in the login form
  await page.fill('input[name="username"]', 'allpermission@gmail.com');
  await page.fill('input[name="password"]', '123456');
  await page.waitForTimeout(5000); // Wait 5 sec to observe filled form

  // 3. Click the "Sign In" button
  await page.click('button:has-text("Sign In")');
  await page.waitForTimeout(5000); // Wait 5 sec to observe login response

  // 4. Navigate to the SMS page manually
  await page.goto('http://192.168.1.125:31767/isp-sms');
  await page.waitForTimeout(5000); // Wait 5 sec to observe SMS page

  // 5. Close browser
  await context.close();
  await browser.close();
});
