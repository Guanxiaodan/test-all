<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
/*-------公共样式-------*/
.to-top {
  margin-top: 1rem;
}

.to-top-large {
  margin-top: 2rem;
}

/*垂直布局*/
.flex-c {
  display: flex;
  flex-direction: column;
}

/*水平布局*/
.flex-r {
  display: flex;
  flex-direction: row;
}

/*主轴方向元素居中*/
.m-center {
  justify-content: center;
}

/*交叉方向元素居中*/
.x-center {
  align-items: center;
}

/*上下左右居中*/
.center {
  justify-content: center;
  align-items: center;
}

/*主轴方向平均分配*/
.m-around {
  justify-content: space-around;
}

/*主轴方向顶边分配*/
.between {
  justify-content: space-between;
}

</style>
