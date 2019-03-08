<template>
  <div class="main">
  欢迎回来：我们亲爱的
  {{$store.state.adminName}}
    <h1>This is main page</h1>
    <div>左侧导航栏</div>
    <div>上方导航栏</div>
    <div>
      <h3>右下角主体</h3>
      <router-view></router-view>
    </div>
  </div>
</template>