<template>
    <div class="">
        <el-breadcrumb>
            <el-breadcrumb-item :to="{path: '/main'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
            <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-tabs type="border-card">
            <el-tab-pane v-for="(c,i) in dishList" :key="i"
            :label="c.cname">
                <span slot="label" >
                    <el-badge class="item" :value="c.dishList.length">{{c.cname}}</el-badge>
                </span>
<!-- zhuti -->
            <el-row>
                <el-col v-for="(d,j) in c.dishList" :key="j" :xs="2" :md="6" :lg="4" :xl="3">
                    <!-- <lmx-dish :data="d"></lmx-dish> -->
                    {{d.title}}
                    <img class="lmx-img" :src="require('../assets/img/dish/'+d.imgUrl)"/>
                </el-col>
            </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dishList:[]     //[{cid:x, cname:x, dishList:[]}]
        }
    },
    mounted(){
        //异步获取菜品列表
        var url=this.$store.state.globalSettings.apiUrl
        +'/admin/dish'; 
        this.$axios.get(url).then(({data})=>{   //对象解构
            this.dishList=data;
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>

<style lang="scss">
    .item{
        margin-top: 10px;
        margin-right: 40px;
    }
    .lmx-img{
        max-width: 100%;
    }
</style>