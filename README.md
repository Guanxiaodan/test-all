# test-all

> Vue前端，后端，数据库练习
> 最简单的前后端和数据库

## 安装

### 进入项目根目录，安装前端依赖
```angular2html
npm install --save
```

### 进入service文件夹，安装后台依赖
```angular2html
npm install
```

### 启动前端（静态服务器）
```angular2html
npm run dev
```

### 启动后台服务器
```angular2html
node index.js
```
> 如果想查看后台打印的日志，执行：
```angular2html
DEBUG=* node index.js
```
> 如果想查看后台index.js的打印，执行：
> 就是看index页面require('debug')后面第二个括号里面是啥
```angular2html
DEBUG=loginService node index.js
```

## 操作

### 查看登录页面日志
> 在浏览器控制台里,输入下面命令，回车，刷新页面
```angular2html
localStorage.debug='login'

```

### 纯前端后台，没有数据库，接口是index里的'/',直接在浏览器中输入 http://localhost:3000/ ，会返回结果

### 如何查看数据库
命令行执行：

#### 进入数据库
```angular2html
mongo
```
#### 查看所有数据库
```angular2html
show dbs
```

#### 使用 **testAll** 数据库
```angular2html
use testAll
```

#### 查看**testAll**数据库下所有数据表
```angular2html
show collections
```

#### 查看user数据表内容
```angular2html
db.user.find()
```

#### 退出数据库
```angular2html
exit
```
