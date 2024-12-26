const { test, expect } = require('@playwright/test');

test('Checkbox Interaction Example', async ({ page }) => {
  // Increase timeout and use DOMContentLoaded to improve load time
  await page.goto('https://the-internet.herokuapp.com/checkboxes', {
    timeout: 60000,  // 60 seconds timeout
    waitUntil: 'domcontentloaded',  // Wait for DOM content to load
  });

  // CSS selectors for the checkboxes on the page
  const checkbox1Selector = '#checkboxes input:nth-child(1)';
  const checkbox2Selector = '#checkboxes input:nth-child(2)';

  //  Check the initial state of checkbox 1 (it should be unchecked)
  const isCheckedBefore = await page.isChecked(checkbox1Selector);
  expect(isCheckedBefore).toBe(false);  // Assert the checkbox is initially unchecked

  //  Check the checkbox (if it is unchecked)
  await page.check(checkbox1Selector); // Check the checkbox

  //  Verify checkbox 1 is checked
  const isCheckedAfter = await page.isChecked(checkbox1Selector);
  expect(isCheckedAfter).toBe(true);  // Assert the checkbox is now checked

  //  Uncheck checkbox 1
  await page.uncheck(checkbox1Selector);  // Uncheck the checkbox

  //  Verify checkbox 1 is unchecked again
  const isUncheckedAfter = await page.isChecked(checkbox1Selector);
  expect(isUncheckedAfter).toBe(false);  // Assert the checkbox is now unchecked

  // Check both checkboxes (checkbox 1 and checkbox 2)
  await page.check(checkbox1Selector);  // Check checkbox 1
  await page.check(checkbox2Selector);  // Check checkbox 2

  // Verify both checkboxes are checked
  const isCheckbox1Checked = await page.isChecked(checkbox1Selector);
  const isCheckbox2Checked = await page.isChecked(checkbox2Selector);
  expect(isCheckbox1Checked).toBe(true);  // Assert checkbox 1 is checked
  expect(isCheckbox2Checked).toBe(true);  // Assert checkbox 2 is checked

  // Uncheck both checkboxes
  await page.uncheck(checkbox1Selector);  // Uncheck checkbox 1
  await page.uncheck(checkbox2Selector);  // Uncheck checkbox 2

  // Verify both checkboxes are unchecked
  const isCheckbox1Unchecked = await page.isChecked(checkbox1Selector);
  const isCheckbox2Unchecked = await page.isChecked(checkbox2Selector);
  expect(isCheckbox1Unchecked).toBe(false);  // Assert checkbox 1 is unchecked
  expect(isCheckbox2Unchecked).toBe(false);  // Assert checkbox 2 is unchecked
});
