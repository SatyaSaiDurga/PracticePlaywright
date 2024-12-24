const { test, expect } = require('@playwright/test');

test('Built-inLocators', async ({ page }) => {

  // Navigate to the page with a longer timeout
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 10000 });

  // Wait for the logo to be visible (with longer timeout)
  const logo = await page.locator('img[alt="orangehrm-logo"]').first();

  // Ensure the logo is visible and within the viewport
  await logo.scrollIntoViewIfNeeded();
  await logo.waitFor({ state: 'visible', timeout: 70000 });

  // Check that the logo is actually visible
  await expect(logo).toBeVisible({ timeout: 70000 });

  // Locate the Username input and fill it
  await page.locator('input[placeholder="Username"]').fill('Admin');

  // Locate the Password input and fill it
  await page.locator('input[placeholder="Password"]').fill('admin123');

  // Click the Submit button (button with type='submit')
  await page.locator('role=button[type="submit"]').click();
});

// const {test, expect}=require('@playwright/test')

// test('Built-inLocators',async({page})=>{

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     //to locate a element,usually image by its text alternative
//     const logo=await page.getByAltText('orangehrm-logo');
//     await expect(logo).toBeVisible({ timeout: 50000 });
//     await expect(logo).toBeVisible();

//     //page.getByPlaceholder()-to locate an input by placeholder
//     await page.getByPlaceholder('Username').fill("Admin")
//     await page.getByPlaceholder('Password').fill("admin123")
//     await page.getByRole('button',{type:'submit'}).click()
// })