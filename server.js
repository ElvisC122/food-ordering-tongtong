const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 解析 JSON 数据的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 提供 HTML 文件
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/menu.html');
});

// 处理表单提交
app.post('/submit-order', (req, res) => {
    const { name, food } = req.body;
    console.log(`收到订单: ${name} 订购了 ${food}`);
    res.send('订单已收到！谢谢。');
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
