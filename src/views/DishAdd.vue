<template>
    <div class="">
    <el-form label-width="100px">
    <el-form-item label="菜品图片">
        <el-upload class="lmx-uploader" :action="uploadAction" 
        :on-success="doUpLoadSucc" name="Img" :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl"/>
        </el-upload>
    </el-form-item>
    </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
        imageUrl:'',    //要显示的预览图地址
         uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',   //可处理文件上传的数据API
         formData:{
            title:'',
            imgUrl:'',          //菜品图片在服务器上保存的名称
            price:'',
            detail:'',
            categoryId:''
         }
        }
    },
    methods: {
        doUpLoadSucc(res,file){
            this.formData.imgUrl=res.fileName;
            //file input[type=file]中读取的第一个上传的文件对象
            this.imageUrl=URL.createObjectURL(file.raw);
        }
    },

}
</script>

<style lang="scss">
    .lmx-uploader{
        .el-upload{
            border:1px dotted #aaa;
            border-radius:3px;
            cursor: pointer;
            width: 250px;
            height: 177px;
            overflow: hidden;
            &:hover{
                border-color: #126;
                background: #307;
            }
        }
        img{
            max-width: 100%;
        }
    }
</style>