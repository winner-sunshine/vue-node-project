const express = require('express');
const bodyParser = require('body-parser')
const serve = express();

serve.use(bodyParser.urlencoded({extend:false}));

//获取盐
serve.get('/api/getSalt',(req,res) =>{
    console.log(req);
    res.send('Hello Word!')
});

serve.post('/api/login',(req,res) => {
   console.log(req.body)
});

serve.listen(8081,()=>{
    console.log('本地服务已经开启')
});
