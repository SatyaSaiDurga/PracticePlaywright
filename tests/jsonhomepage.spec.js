const { test, expect } = require('@playwright/test');

test('Checking JSON Home Page', async ({ page }) => {
  // Navigate to the JSONPlaceholder home page
  const response = await page.goto('https://jsonplaceholder.typicode.com/');

  // Verify that the page loaded successfully with a status code of 200
  expect(response.status()).toBe(200);

  // Verify the specific header text on the page
  const header = await page.locator('h1.mt-two.text-lg'); // More specific class-based selector
  await expect(header).toHaveText('Free fake and reliable API for testing and prototyping');

  // Verify the Navbar is present on the page (you may adjust the selector if needed)
  const navbar = await page.locator('nav'); // Assuming there's a <nav> element
  await expect(navbar).toBeVisible(); // Ensure the navbar is visible
});


// const {test,expect}=require('@playwright/test');

// const { request } = require('http');

// test('Checking JSON Home Page',async({test}) =>{

// const response=await request.get('https://jsonplaceholder.typicode.com/');

// expect(response.status()).toBe(200);

// //to check header in the page

// const header=await page.locator('h1');

// await expect(header).to.HaveText('{Free fake and reliable API for testing and prototyping');

// const Navbar=await page.locator('nav');

// await expect (navbar).toBeVisible();

// });