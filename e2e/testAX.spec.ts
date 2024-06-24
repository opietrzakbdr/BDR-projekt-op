import { fakerPL } from '@faker-js/faker';
import { test, expect, Page } from '@playwright/test';


async function goToHomepl(page: Page, cookieDeclaration: string) {
  await page.goto('https://home.pl');
  page.getByRole('button', { name: cookieDeclaration }).click();
  await expect(page.getByRole('link', { name: 'Logo home.pl' })).toBeVisible();
}


test('testAX', async ({ page }) => {
  test.setTimeout(120000);
  await goToHomepl(page, 'ODRZUĆ WSZYSTKIE')
  await page.getByRole('textbox', { name: 'Wyszukaj domenę lub produkt' }).click();
  await page.getByRole('textbox', { name: 'Wyszukaj domenę lub produkt' }).fill(fakerPL.lorem.lines(1));
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
//dodać ceny po drodze z AXów