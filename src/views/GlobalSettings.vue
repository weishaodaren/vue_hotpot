<template>
    <div>
        <h1>GlobalSetitngs</h1>
        <el-breadcrumb>
            <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
            <el-breadcrumb-item>全局设置</el-breadcrumb-item>
        </el-breadcrumb>
<br>
        <el-card shadow="never">
            <el-form label-width="110px">
              <el-form-item label="应用名称:">
                <el-input v-model="appName"></el-input>
              </el-form-item>
              <el-form-item label="数据API地址:">
                <el-input v-model="apiUrl"></el-input>
              </el-form-item>
              <el-form-item label="管理后台:">
                <el-input v-model="adminUrl"></el-input>
              </el-form-item>
              <el-form-item label="客户App地址:">
                <el-input v-model="appUrl"></el-input>
              </el-form-item>
              <el-form-item label="ICP备案号:">
                <el-input v-model="icp"></el-input>
              </el-form-item>
              <el-form-item label="版权声明:">
                <el-input v-model="copyright"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="doSubmit">提交</el-button>
                <el-button @click="doCancel">取消</el-button>
              </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            appName:'',
            apiUrl:'',
            adminUrl:'',
            appUrl:'',
            icp:'',
            copyright:''
        }
    },
    mounted() {
        //将$store存储的全局配置数据赋值给中间变量--formData
        // this.formData=this.$store.state.globalSettings;
         this.appName=
            this.$store.state.globalSettings.appName; 
            this.apiUrl=
            this.$store.state.globalSettings.apiUrl;
            this.adminUrl=
            this.$store.state.globalSettings.adminUrl;
            this.appUrl=
            this.$store.state.globalSettings.appUrl;
            this.icp=
            this.$store.state.globalSettings.icp;
            this.copyright=
            this.$store.state.globalSettings.copyright;

    },
    methods: {
        doSubmit(){
           var url=this.$store.state.globalSettings.apiUrl
           +'/admin/settings';
           var data={ 
               appName:this.appName,
               apiUrl:this.apiUrl,
               adminUrl:this.adminUrl,
               appUrl:this.appUrl,
               icp:this.icp,
               copyright:this.copyright
           }
           this.$axios.put(url,data).then((res)=>{
               if(res.data.code==200){
                   this.$notify({
                    title: '老魔仙',
                    message: '提交成功',
                    type: 'success'
        });
        this.appName=this.$store.state.commit('setGlobalSettings','appName');
               }else{
                    this.$notify({
                    title: '麻瓜',
                    message: '提交失败',
                    type: 'error'
        });
               }
           }).catch((err)=>{
               console.log(err);
           });
        },
        doCancel(){
            //this.formData=this.$store.state.globalSettings;
            //应用复制，两个变量指向一个对象 ↑
            //对象复制, 属性复制，创建两个一样的对象
            this.appName=
            this.$store.state.globalSettings.appName; 
            this.apiUrl=
            this.$store.state.globalSettings.apiUrl;
            this.adminUrl=
            this.$store.state.globalSettings.adminUrl;
            this.appUrl=
            this.$store.state.globalSettings.appUrl;
            this.icp=
            this.$store.state.globalSettings.icp;
            this.copyright=
            this.$store.state.globalSettings.copyright;

        }
    },
}
</script>


