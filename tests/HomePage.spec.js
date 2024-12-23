const {test,expect} = require('@playwright/test');

test('Home Page',async({page})=>{

    await page.goto('https://staging.ems.devdolphins.com');

    const pageTitle=page.title();
    console.log('page title is:',pageTitle);

    await expect(page).toHaveTitle('DevDolphins');

    const pageURL=PageTransitionEvent.url();
    console.log('page URL is:',pageURL);
    
    await expect(page).toHaveURL('https://staging.ems.devdolphins.com');

    await page.goto('https://staging.ems.devdolphins.com', { timeout: 60000 }); // Increase timeout to 60 seconds

    await page.close();
})