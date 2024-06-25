import { test, expect } from '@playwright/test';


// sprawdza czy przy zaakceptowanych cookiesach wysyla request (ma wysyłać)
test('testCheckAdServerCookieIfAllowed', async ({ page }) => {
  await page.goto('https://home.pl/');
  const requestPromise = page.waitForRequest('https://ias.home.pl/t/web?identity=COOKIE');
  await page.getByRole('button', { name: 'AKCEPTUJ WSZYSTKIE' }).click();
  const request = await requestPromise;
}); 


// sprawdza czy przy odrzuconych cookiesach wysyłany request (ma nie wysyłać)
test('testCheckAdServerCookieIfNotAllowed', async ({ page }) => {
  await page.goto('https://home.pl/');
  const requestPromise = page.waitForRequest('https://ias.home.pl/t/web?identity=COOKIE');
  await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
  const request = await requestPromise;
}); 


// testCheckAnalytic zostawiam chociaż nie działa prawidłowo - wywala timeout - gdy na home.pl odrzucimy pliki 
// cookie powinien i tak ładować się skrypt Analyticsa (jest on zaliczany do kategorii "Niezbędne" w płachcie cookie), 
// test nie przechodzi niezależnie od tego czy pliki cookie odrzucimy czy zaakceptujemy

test('testCheckAnalytics', async ({ page }) => {
  await page.goto('https://home.pl/');
  const requestPromise = page.waitForRequest(request =>
    request.url() === 'https://www.google-analytics.com/analytics.js' && request.method() === 'GET',
  );
  await page.getByRole('button', { name: 'ODRZUĆ WSZYSTKIE' }).click();
  const request = await requestPromise;
});

