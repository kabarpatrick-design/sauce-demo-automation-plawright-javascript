const {test, expect } = require('@playwright/test');
test('user can login with valid credentials', async({page})=> {
    await page.goto('/')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});
test('locked user can not login',async({page})=> {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByTestId('error')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    await expect(page).toHaveURL('/');
})