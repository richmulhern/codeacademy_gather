const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User sees details of item', () => {
    describe('Main page should have link', () => {
        it('takes user to details page', () => {
            const itemToCreate = buildItemObject();
            browser.url('/items/create');
            browser.setValue('#title-input', itemToCreate.title);
            browser.setValue('#description-input', itemToCreate.description);
            browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
            browser.click('#submit-button');

            browser.url('/');
            browser.click('.item-card a');

            assert.include(browser.getText('body'), itemToCreate.description);
        })
    })
})
