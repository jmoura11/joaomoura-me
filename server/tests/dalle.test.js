import request from 'supertest';
import app from '../index.js';

describe('POST /api/v1/dalle', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'test';
  });

  it('should respond with photo property', async () => {
    const res = await request(app)
      .post('/api/v1/dalle')
      .send({ prompt: 'teste' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('photo');
  });
});
