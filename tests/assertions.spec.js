const{test,expect}=require('@playwright/test')

test('AssertionsTest',async({page})=>{

   //sample to test a URL

   await page.goto('https://demo.nopcommerce.com/register')
   
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

   //to test the title of the page

   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   //to check the element is present or not
   const logoElement=await page.locator('.header-logo')
   await expect(logoElement).toBeVisible()

   //to check element is enable
   const searchStoreBox=await page.locator('#small-searchterms')
   await expect(searchStoreBox).toBeEnabled()

   //to check radio/checkbox is selected or not
   const maleRadioButton=await page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked

   //to check check box
   const newsletterCheckbox=await page.locator('#Newsletter')
   await expect(newsletterCheckbox).toBeChecked

   //to check element has attribute
   const regButton=await page.locator('#register-button')  
   await expect(regButton).toHaveAttribute('type','submit')

   //to have text-Element matches text
   await expect(await page.locator('.page-title h1')).toHaveText('Register')//full text
  
   //to contain text-Element contains text
   await expect(await page.locator('.page-title h1')).toContainText('Reg')//partial text

   //to have value-Input has a value
   const emailInput=await page.locator('#Email')
   await emailInput.fill('sam@gmail.com')
   await expect(emailInput).toHaveValue('sam@gmail.com')
  
   //to have count-list of elements lenght
   const options=await page.locator('select[name="DateOfBirthMonth"] option')
   await expect(options).toHaveCount(13)

})





