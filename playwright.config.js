const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'https://www.saucedemo.com',
        testIdAttribute: 'data-test',
    },
});