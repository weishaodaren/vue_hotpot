<template>
  <div class="login">
    <el-card class="lmx-login-card">
      <div slot="header">管理员登录</div>
      <div>
      <el-form label-width="100px">
        <el-form-item label="管理员名：">
          <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
        </el-form-item>
         <el-form-item label="登录密码：">
          <el-input type="password" v-model="formData.apwd" placeholder="请输入管理员密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">登录</el-button>
          <el-button type="info" @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
      </div>
    </el-card>
    {{$store.state.globalSettings}}
  </div>
</template>

<script>
  export default{
    data(){       // !!普通组件模型数据是  函数返回值
      return {
        formData: {   //表单中影虎输入的两个数据
          aname: 'admin',
          apwd: ''
        }
      }
    },
    methods: {
      doLogin(){
        var url=this.$store.state.globalSettings.apiUrl
        +`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
        this.$axios.get(url).then((res)=>{
            if(res.data.code==200){ //登录成功
              //把用户名存入Vuex存储仓库
              this.$store.commit('setAdminName',this.formData.aname);
              //执行视图跳转
              this.$router.push('/main');
            }else{
              this.$alert('用户名或密码有误！','登录失败',{type:'error'});
            }
        }).catch((err)=>{
            console.log(err);
        })
      },
      doCancel(){
        this.formData.aname='';
        this.formData.apwd='';
      }
    },
    mounted(){
      //当前组件挂载完成后异步请求整个网站全局配置数据
      var url=this.$store.state.globalSettings.apiUrl
      +'/admin/settings';
      this.$axios.get(url).then((res)=>{
        this.$store.commit('setGlobalSettings',res.data);
      }).catch((err)=>{
        console.log(err);
      })
    },
  }
</script>



<style lang="scss">
  .lmx-login-card{
    width:400px;
    margin: 100px auto;
    .el-card__header{
      text-align:center;
      font-size:1.2em;
      font-weight:bolder;
    }
  }
</style>

