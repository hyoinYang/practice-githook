const request = require('supertest');
const app = require('../src/app');

// tests/todo.test.js
describe('TODO 애플리케이션을 위한 샘플 테스트', () => {
    const a = 1;
    const b = 2;

    it('a + b 는 3 이다.', () => {
        expect(a + b).toBe(3);
    });
});


describe('TODO가 정상적으로 생성되는지 테스트', () => {
    it('새로운 TODO를 생성하는 것에 성공하면 201을 반환하기.', async () => {
        const testTitle = 'Buy milk';
        const res = await request(app)
            .post('/todos')
            .send({ title: testTitle })
            .expect('Content-Type', /json/)
            .expect(201); // 201 Created

        // 반환된 body 체크
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('title', testTitle);
        expect(res.body).toHaveProperty('completed', false);
    });
});
