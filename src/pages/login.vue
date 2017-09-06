<style scoped>
  .container-all {
    width: 100%;
    height: 100%;
    background: url("../assets/tebreller.jpg") no-repeat;
    background-size: cover;
  }

  .container-border {
    box-shadow: 0 0 2px rgba(255, 255, 255, .7), 0 1px 8px rgba(0, 0, 0, .3);
    border: 1px solid #ccc;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
  }

  .container-border:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, .3), 0 1px 8px rgba(0, 0, 0, .3);

  }

</style>

<template>
  <div class="flex-c center container-all">
    <div>
      <div class="container-border flex-c m-around ">
        <div>
          <h2>请输入用户名：</h2>
          <Input class="to-top" v-model="name" placeholder="请输入用户名..." style="width: 300px"></Input>
        </div>
        <div>
          <h2>请输入密码：</h2>
          <Input class="to-top" v-model="password" placeholder="请输入密码..." type="password" style="width: 300px"></Input>
        </div>
        <div>
          <Button type="primary" class="to-top-large" @click="login">登 录</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const debug = require('debug')('login');
  const _ = require('lodash');
  const axios = require('axios');

  export default {
    data() {
      return {
        name: '',
        password: '',
      };
    },
    methods: {
      login() {
//        检查数据
        if (_.isEmpty(this.name) || _.isEmpty(this.password)) {
          this.$Notice.warning({
            title: '名称或密码不能为空',
          });
          return;
        }
        const send = {
          user: this.name,
          pwd: this.password,
        };
        debug('要发送的数据', send);
        axios.post('http://localhost:3000/login', send).then((res) => {
          this.$Notice.success({
            title: '登陆成功',
          });
          debug('请求成功', res);
        }).catch((err) => {
          debug('请求失败', err);
        });
      },
    },
  };
</script>

<style>

</style>
