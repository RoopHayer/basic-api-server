'use strict';

const app = require('../src/server.js')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app.app);

describe('Testing for name in query string on GET /Person',  ()=>{
  
  it('Should be able to throw a 404 on a bad route', async ()=>{
    const response = await request.get('/people')
    expect(response.status).toBe(404)
  })

  
  it('Should be able to throw a 404 on a bad method', async ()=>{
    const response = await request.put('/person')
    expect(response.status).toBe(404)
  })

  it('Should be able to throw a 500 on empty query', async ()=>{
    const response = await request.get('/person')
    expect(response.status).toBe(500)
  })

it('Should be able to throw a 200 on a string', async ()=>{
  const response = await request.get('/person')
  expect(response.status).toBe(200)
  expect(response.text).toBe('')
})
})