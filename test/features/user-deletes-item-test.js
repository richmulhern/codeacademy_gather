const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('Delete', () => {
    describe('user clicks delete link', () => {
        it('item is removed', () => {
            const itemToCreate = buildItemObject();
            browser.url('/items/create');
            browser.setValue('#title-input', itemToCreate.title);
            browser.setValue('#description-input', itemToCreate.description);
            browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
            browser.click('#submit-button');

            browser.submitForm('.delete-form');

            assert.notInclude(browser.getText('body'), itemToCreate.title);
        })
    })
})
