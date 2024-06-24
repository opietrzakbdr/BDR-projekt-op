import { test, expect, Page } from '@playwright/test';


async function goToHomepl(page: Page, cookieDeclaration: string) {
  await page.goto('https://home.pl');
  page.getByRole('button', { name: cookieDeclaration }).click();
  await expect(page.getByRole('link', { name: 'Logo home.pl' })).toBeVisible();
}


test('testPricesMainPage', async ({ page }) => {
    await goToHomepl(page, 'ODRZUĆ WSZYSTKIE')
    await expect(page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' })).toContainText('6,14 zł');
    await expect(page.getByRole('link', { name: 'com-1 56,58 zł / rok' })).toContainText('56,58 zł');
    await expect(page.getByRole('link', { name: 'eu-2 29,52 zł / rok' })).toContainText('29,52 zł');
  });

test('testPricePlDomainPage', async ({ page }) => {
    await goToHomepl(page, 'ODRZUĆ WSZYSTKIE')
    await page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' }).click();
    await expect(page.getByRole('main')).toContainText('6,14 zł');
});

test('testPriceEuDomainPage', async ({ page }) => {
    await goToHomepl(page, 'ODRZUĆ WSZYSTKIE')
    await page.getByRole('link', { name: 'eu-2 29,52 zł / rok' }).click();
    await expect(page.getByRole('main')).toContainText('29,52 zł');
});

test('testPriceHostingPage', async ({ page }) => {
    await page.goto('https://home.pl/hosting/');
    await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
    await expect(page.locator('#szczegoly')).toContainText('49,08 zł');
    await expect(page.locator('#szczegoly')).toContainText('61,38 zł');
    await expect(page.locator('#szczegoly')).toContainText('184,50 zł');
    await expect(page.locator('#szczegoly')).toContainText('492,00 zł');
  });
