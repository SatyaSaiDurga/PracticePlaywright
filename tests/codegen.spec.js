import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.ems.devdolphins.com/welcome');
  await page.goto('https://staging.ems.devdolphins.com/welcome', { timeout: 70000 }); // 70 seconds timeout
  await page.getByLabel('Employee ID:').click();
  await page.getByLabel('Employee ID:').press('CapsLock');
  await page.getByLabel('Employee ID:').fill('DEDOL-0001');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').press('CapsLock');
  await page.getByLabel('Password:').fill('222222');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByText('Upload').click();
  await page.getByText('Navbar DevDolphins My Corner Reset Password Logout Upload Personal Details *').setInputFiles('employee_details.xlsx');
})

// import { test, expect } from '@playwright/test';

// // Define constants for wait and timeout values
// const NAVIGATION_WAIT = 5000; // 5 seconds wait time
// const TIMEOUT = 500000; // Adjust according to your needs
// const loginUrl = 'https://staging.ems.devdolphins.com/welcome'; // login URL here

// // This hook will run before each test
// test.beforeEach(async ({ page }) => {
//   // Log in and navigate to the form page
//   await page.goto(loginUrl, { timeout: TIMEOUT });
  
//   // Perform login steps
//   await page.getByLabel('Employee ID:').click();
//   await page.getByLabel('Employee ID:').press('CapsLock');
//   await page.getByLabel('Employee ID:').fill('DEDOL-0001');
//   await page.getByLabel('Password:').click();
//   await page.getByLabel('Password:').press('CapsLock');
//   await page.getByLabel('Password:').fill('222222');
//   await page.getByRole('button', { name: 'Login' }).click();
  
//   // Wait for the page to load or navigation to complete
//   await page.waitForTimeout(NAVIGATION_WAIT); // Wait for the page to settle
// });

// test('test', async ({ page }) => {
//   // Assuming login was successful and you're now on the welcome page
//   await page.goto('https://staging.ems.devdolphins.com/welcome'); 

//   // Continue with the rest of your test steps
//   await page.getByRole('link', { name: 'Add Employee' }).click();
//   await page.getByText('Upload').click();
//   await page.getByText('Navbar DevDolphins My Corner Reset Password Logout Upload Personal Details *').setInputFiles('employee_details.xlsx'); 

//   // Optionally, you can add assertions here
//   // Example:
//   await expect(page.getByText('Upload successful')).toBeVisible();
// });
