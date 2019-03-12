<template>
    <div class="lmx-table-info">
        <el-card shadow="hover">
            <div class="lmx-table" :style="{background:getTableColor(data.status)}">{{data.tid}}号桌: {{data.status | tableStatus}}</div>
            <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>

        <!--桌台详情的对话框-->
        <el-dialog :title="data.tid+'号桌台详情'" :visible='dialogTableDetailVisible' 
        :before-close="closeDialogTableDetail">

        <!--对话框主体-->
            <el-tabs type="border-card" @tab-click="makeQRCode">
              <el-tab-pane label="桌台状态">状态加载ing</el-tab-pane>
              <el-tab-pane label="桌台二维码">
                  <img :src="qrcodeData"/>
              </el-tab-pane>
            </el-tabs>  
        
        <!-- 对话框尾部 -->

        <div slot="footer">
            <el-button type="primary" @click="dialogTableDetailVisible=false">确定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
import qrcode from 'qrcode';
export default {
    data(){
        return{
            dialogTableDetailVisible: false,
            qrcodeData: ''
        }
    },
    props:['data'],
    methods: {
        getTableColor(status){
            if(status==1) return '#FE4365';
            else if(status==2) return '#F9CD49';
            else if(status==3) return '#1FAF9B';
            else return '#909399';     
        },
        showTableDetail(){
            // console.log(this.data); 当前桌子的数据
            this.dialogTableDetailVisible=true;
        },
        closeDialogTableDetail(){
            this.dialogTableDetailVisible=false;
        },
        makeQRCode(){
            //创建二维码——注意 此方法不能再组件 mounted调用
            // 因为绘图canvas在el-dialog中。加载时不在dom树
            // var qrcode=require('qrcode');
            // var canvas=document.getElementById('qrcanvas');
            //每个桌子对应的url：http://127.0.0.1:8092/#/3
            var tableUrl=
            this.$store.state.globalSettings.appUrl+'/#/'
            +this.data.tid;
            //把绘制得到的图片二进制数据转换为字符编码
            qrcode.toDataURL(tableUrl,{width:250,errorCorrectionLevel: 'M' },(err,url)=>{
                // console.log(url);
                this.qrcodeData=url;
            });
        }
    },
}
</script>

<style lang="scss">
    .lmx-table-info{
        padding:3px;
        text-align:center;
        .lmx-table{
            width:90%;
            height:120px;
            line-height:120px;
            border:1px solid #FC9D9A;
            border-radius:25%;
            box-shadow:3px -4px 5px #666;
            margin:5px auto;
        }
    }
</style>