/**
 * Created by GXD on 2017/9/5.
 *
 */

const express = require('express');
const bodyparser = require('body-parser');
const _ = require('lodash');
const debug = require('debug')('loginService')

const app = express();

// app.use(bodyParser.urlencoded({limit: '3000kb',extended: false}));
app.use('/', (req, res, next) => {
  debug('HTTP REQ:', req.method, req.url, req.headers.origin);
  // TODO: 设置跨域的黑白名单
  res.set('Access-Control-Allow-Method', req.method);
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Headers', 'DNT,COOKIE,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,X-Forwarded-For');
  res.set('Access-Control-Allow-Origin', req.headers.origin || 'null');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
  } else {
    next();
  }
});

app.use(bodyparser.json());

// 浏览器的访问接口
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  debug('req前端发过来的数据', req.body);
  if (_.isEmpty(req.body)) {
    res.status(400).send('参数错误');
    return;
  }
  res.status(200).send('登陆成功');
});

// 服务器监听端口
app.listen(3000, () => {

});
