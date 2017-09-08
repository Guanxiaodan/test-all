/**
 * Created by GXD on 2017/9/5.
 *
 */

const express = require('express');
const bodyparser = require('body-parser'); // 用于解析传过来的req.body，不然会是undefined
const _ = require('lodash');
const debug = require('debug')('loginService');
const mongoClient = require('mongodb').MongoClient;

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

// mongodb部分
mongoClient.connect('mongodb://localhost:27017', { reconnectTries: 99999999, reconnectInterval: 5000 }).then((retDb) => {
  debug('正在使用的数据库mongodb://localhost:27017');
  this.db = retDb.db('testAll');
  debug('数据库打开成功');

// 浏览器的访问接口
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.post('/login', (req, re) => {
    debug('req前端发过来的数据', req.body);
    if (_.isEmpty(req.body)) {
      re.status(400).send('参数错误');
      return;
    }

    this.db.collection('user').insertOne({ user: req.body.user, pwd: req.body.pwd }).then((doc) => {
      re.status(200).send('插入数据库成功');
    }).catch((err) => {
      re.status(400).send('插入数据库失败');
      debug('错误了', err);
    });
  });

// 服务器监听端口
  app.listen(3000, () => {

  });
}).catch((e) => {
  debug(e.message);
  debug('数据库打开失败', e);
  process.exit();
});
