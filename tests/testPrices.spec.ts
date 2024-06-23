import { test, expect } from '@playwright/test';

test('testPricesMainPage', async ({ page }) => {
    await page.goto('https://home.pl/');
    await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
    await expect(page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' })).toContainText('6,14 zł');
    await expect(page.getByRole('link', { name: 'com-1 56,58 zł / rok' })).toContainText('56,58 zł');
    await expect(page.getByRole('link', { name: 'eu-2 29,52 zł / rok' })).toContainText('29,52 zł');
  });

test('testPricePlDomainPage', async ({ page }) => {
    await page.goto('https://home.pl/');
    await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
    await page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' }).click();
    await expect(page.getByRole('main')).toContainText('6,14 zł');
});

test('testPriceEuDomainPage', async ({ page }) => {
    await page.goto('https://home.pl/');
    await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
    await page.getByRole('link', { name: 'eu-2 29,52 zł / rok' }).click();
    await expect(page.getByRole('main')).toContainText('29,52 zł');
});

test('testPriceHostingPage', async ({ page }) => {
    await page.goto('https://home.pl/');
    await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
    await page.getByRole('link', { name: 'Hosting WWW' }).click();
    await expect(page.getByTestId('product-box-price-price')).toContainText('49,08 zł');
    await expect(page.getByTestId('product-box-price-price')).toContainText('61,38 zł');
    await expect(page.getByTestId('product-box-price-price')).toContainText('184,50 zł');
    await expect(page.getByTestId('product-box-price-price')).toContainText('492,00 zł');
    // await expect(page.locator('#szczegoly')).toContainText('49,08 zł');
  });


//   await expect(page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' })).toBeVisible();

//   await page.locator('css=#order_bill_address_attributes_zipcode').fill('70-123');

// await expect(page.getByRole('heading', { name: 'Order placed successfully' })).toBeVisible();

// await expect(page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' })).toBeVisible();

// await expect(page.getByRole('main')).toContainText('6,14 zł');


// await page.getByRole('link', { name: 'pl-0 6,14 zł / rok Polecamy' }).click();
// await expect(page.getByRole('main')).toContainText('Cena od 6,14 zł brutto / rok');
// await page.getByText('Cena od 6,14 zł brutto / rok').click({
//   button: 'right'
// });
// await page.locator('#gatsby-focus-wrapper').click();
// await page.getByText('Cena od 6,14 zł brutto / rok').click();
// });

// await page.getByRole('link', { name: 'Domeny internetowe' }).click();
// await page.getByRole('link', { name: 'Domena .pl' }).click({
//   button: 'right'
// });
// await page.getByRole('link', { name: 'Domena .pl' }).click();
// }); 



// test('testHostingPrice', async ({ page }) => {
//     await page.goto('https://home.pl/');
//     await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
//     await page.getByRole('link', { name: 'Hosting WWW' }).click();
//     await page.getByTestId('product-box-price-price').toContainText('49,08 zł');
//     await page.getByTestId('product-box-price-price').toContainText('61,38 zł');
//     await page.getByTestId('product-box-price-price').toContainText('184,50 zł');
//     await page.getByTestId('product-box-price-price').toContainText('492,00 zł');
//     // await expect(page.locator('#szczegoly')).toContainText('49,08 zł');
//   });

