import { test, expect } from '@playwright/test';

test('testAX', async ({ page }) => {
  await page.goto('https://home.pl/');
  await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
  await page.getByRole('textbox', { name: 'Wyszukaj domenę lub produkt' }).click();
  await page.getByRole('textbox', { name: 'Wyszukaj domenę lub produkt' }).fill('jdwnxwnax');
  await page.getByRole('button', { name: 'Wyszukaj' }).click();
  await page.locator('#domain-search-transfer').getByRole('button', { name: 'Dodaj do koszyka' }).click();
  await page.locator('.sc-1enuft9-0').click();
  await page.locator('#domain-search-transfer').getByRole('button', { name: 'Idź do kasy' }).click();
  await page.locator('div:nth-child(4) > .sc-z6abpp-0').click();
  await page.getByRole('button', { name: 'Usuń produkt' }).click();
  await page.locator('div:nth-child(4) > .sc-z6abpp-0').click();
  await page.getByRole('button', { name: 'Usuń produkt' }).click();
  await page.getByRole('button', { name: 'Przechodzę do koszyka' }).click();
  await page.getByRole('button', { name: 'Zamów' }).click();
});
