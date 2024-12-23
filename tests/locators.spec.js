const {test,expect}=require('@playwright/test')

test('Locators',async({page})=>{

await page.goto("https://demoblaze.com/index.html")

//await page.locator('id=login2').click()
await page.click('id=login2')

await page.fill('#loginusername','pavanol')

await page.fill("input[id='loginpassword]",'test@123')

await page.click("/button[normalize-space()='Log in']")

const logoutlink=await page.locator("//a[normalize-space()='Log out']")

await expect(logoutlink).toBeVisible();

await page.close()
})
