<template>
    <div>
        <h1>GlobalSetitngs</h1>
        <el-breadcrumb>
            <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
            <el-breadcrumb-item>全局设置</el-breadcrumb-item>
        </el-breadcrumb>
<br>
        <el-card shadow="never">
            <el-form label-width="100px">
              <el-form-item label="应用名称:">
                <el-input v-model="formData.appName"></el-input>    
              </el-form-item>  
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formData:{

            }
        }
    }
}
</script>




