// Import Playwright testing library
const { test, expect } = require('@playwright/test');

test('Test numeric input field', async ({ page }) => {
  // Increase timeout for page.goto and actions like fill or press
  await page.goto('https://the-internet.herokuapp.com/inputs', { timeout: 60000 });  // 60 seconds timeout for page load

  // Get the numeric input field by its selector
  const inputField = await page.locator('input[type="number"]');

  // Test: Set a number value in the input field
  await inputField.fill('123', { timeout: 5000 });  // Timeout for the fill action (5 seconds)
  const inputValue = await inputField.inputValue();
  expect(inputValue).toBe('123');

  // Test: Increase the value using the up arrow
  await inputField.press('ArrowUp', { timeout: 5000 });  // Timeout for the press action (5 seconds)
  const increasedValue = await inputField.inputValue();
  expect(Number(increasedValue)).toBe(124);

  // Test: Decrease the value using the down arrow
  await inputField.press('ArrowDown', { timeout: 5000 });
  const decreasedValue = await inputField.inputValue();
  expect(Number(decreasedValue)).toBe(123);

  // Test: Enter a negative number
  await inputField.fill('-10', { timeout: 5000 });
  const negativeValue = await inputField.inputValue();
  expect(negativeValue).toBe('-10');

  // Test: Clear the input field
  await inputField.fill('', { timeout: 5000 });
  const clearedValue = await inputField.inputValue();
  expect(clearedValue).toBe('');
});
