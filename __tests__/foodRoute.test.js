'use strict';

const server = require('../src/server.js')
const { db } = require('../src/models');
const supertest = require('supertest');

const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing for food route', ()=>{


  it('Should be able to read a record using GET /food', async ()=>{
      const response = await request.get('/food');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([]);
    });
    it('Should be able to create a record using POST', async ()=>{
      const response = await request.post('/food').send({
        name: 'banana',
        calories: 140,
      });
      expect(response.status).toEqual(201);
      expect(response.body.name).toEqual('banana');
    });



    
})
