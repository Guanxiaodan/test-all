# test-all

> Vue前端，后端，数据库练习

## 安装

### 安装前端依赖
```angular2html
npm install --save
```

### 进入service文件夹
```angular2html
npm install
```

### 启动项目
```angular2html
npm run dev
```

### 启动后台
```angular2html
node index.js
```
> 如果想查看后台打印的日志，执行：
```angular2html
DEBUG=* node index.js
```
> 如果想查看后台index页面的打印，执行：
> 就是看index页面require('debug')后面第二个括号里面是啥
```angular2html
DEBUG=loginService node index.js
```


### 查看登录页面debug
> 在浏览器控制台里,输入下面命令，回车，刷新页面
```angular2html
localStorage.debug='login'

```
