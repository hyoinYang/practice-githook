const express = require('express');
const todoRouter = require('./routes/todo');

const app = express();
app.use(express.json());

// 간단한 헬스체크용 라우트
app.get('/', (req, res) => {
    res.send('Hello, TODO App!');
});

// /todos 경로로 들어오는 요청을 todoRouter로 위임
app.use('/todos', todoRouter);

module.exports = app;
