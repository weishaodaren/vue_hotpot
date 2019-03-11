<template>
    <div class="lmx-table-info">
        <el-card shadow="hover">
            <div class="lmx-table" :style="{background:getTableColor(data.status)}">{{data.tid}}号桌: {{data.status | tableStatus}}</div>
            <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>

        <!--桌台详情的对话框-->
        <el-dialog :title="data.tid+'号桌台详情'" :visible='dialogTableDetailVisible'>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogTableDetailVisible: false
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
            border-radius:50%;
            box-shadow:3px -4px 5px #666;
            margin:5px auto;
        }
    }
</style>