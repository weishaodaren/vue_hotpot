<template>
  <div class="lmx-main-header">
    <h3 class="lmx-title">{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="lmx-right">
      当前用户:{{$store.state.adminName}}
      <el-button size="mini" @click="quit">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    quit(){
      //清除当前用户登陆信息
      this.$store.commit('setAdminName','');
      // 跳转会首页
      this.$router.push('/login');
    }
  }
}
</script>




<style lang="scss">
$header-height:60px;
  .lmx-main-header{
    background: #FC9D9A;
    border-radius: 4px;
    height: $header-height;
    line-height:$header-height;
    padding: 0 6px;
    .lmx-title{
      color:#fff;
      float: left;
      margin:0;
    }
    .lmx-right{
      float:right;
    }
  }
</style>

