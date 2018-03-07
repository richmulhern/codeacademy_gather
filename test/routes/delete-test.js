const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');
const Item = require('../../models/item');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id/delete', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('POST', () => {
    it('deletes item', async () => {
        const item = await seedItemToDatabase();

        const response = await request(app).post(`/items/${item._id}/delete`);
        const allItems = await Item.find({});

        assert.equal(allItems.length, 0);

        assert.equal(response.status, 302);
        assert.equal(response.headers.location, '/');
    })
  });
});
