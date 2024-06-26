import { fakerPL } from '@faker-js/faker';
import { test, expect, Page } from '@playwright/test';


async function goToHomepl(page: Page, cookieDeclaration: string) {
  await page.goto('https://home.pl');
  page.getByRole('button', { name: cookieDeclaration }).click();
  await expect(page.getByRole('link', { name: 'Logo home.pl' })).toBeVisible();
}

//sprawdza czy działa prawidłowo AX - czy dodają się prawidłowo produkty "z haka" do koszyka do domeny
test('testAX', async ({ page }) => {
  // test.setTimeout(120000);
  //given
  await goToHomepl(page, 'ODRZUĆ WSZYSTKIE')
  await page.getByRole('textbox', { name: 'Wyszukaj domenę lub produkt' }).fill(fakerPL.lorem.lines(1));
  await page.getByRole('button', { name: 'Wyszukaj' }).click();
  //przy "dodaj do koszyka" może się wywalić - czasami pojawiają się jeszcze dodatkowe przyciski "dodaj do koszyka" i nie wie
  // który wybrać, ccsy mamy takie same też w przypadku tych przycisków a po xpath nie działa lokalizowanie
  // w przypadku naszej strony
  // await page.locator('css=sc-scktkg-2 iOEaxr').getByRole('button', { name: 'Dodaj do koszyka' }).click();
  await page.locator('#domain-search-transfer').getByRole('button', { name: 'Dodaj do koszyka' }).click();
  await page.locator('.sc-1enuft9-0').click();
  await page.locator('#domain-search-transfer').getByRole('button', { name: 'Idź do kasy' }).click();
  //when
  await page.getByRole('button', { name: 'Przechodzę do koszyka' }).click();
  await expect(page.locator('section')).toContainText('20,44 zł');
  await page.getByRole('button', { name: 'Zamów' }).click();
  //then
  await expect(page.getByText('Dzień dobry')).toBeVisible();
});

