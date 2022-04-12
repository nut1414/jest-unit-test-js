
const request = require('supertest')
const app = require('../')

test('GET /api/util/fibo/5', () => {
  return request(app).get('/api/util/fibo/5')
    .expect({ status: 'success', result: 5 })
})
