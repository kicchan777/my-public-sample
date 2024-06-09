import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hotel.testplanisphere.dev/ja/');

  // login
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByLabel('メールアドレス').fill('sakura@example.com');
  await page.getByLabel('パスワード').fill('pass1234');
  await page.locator('#login-button').click();

  // expect
  await page.getByRole('heading', { name: 'マイページ' }).waitFor();
  await expect(page.locator('#email')).toContainText('sakura@example.com');
  await expect(page.locator('#rank')).toContainText('一般会員');

  // logout
  await page.getByRole('button', { name: 'ログアウト' }).click();
  await expect(page.getByRole('button')).toContainText('ログイン');
});