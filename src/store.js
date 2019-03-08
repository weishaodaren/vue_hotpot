import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//多组件所公用的存储仓库
export default new Vuex.Store({
  // 公共数据读取方法: this.$store.state.adminName
  // 公共数据读取方法: this.$store.state.globalSettings
  state: {            //当前数据的状态，类似Vue组件对象的data属性
    adminName: '', //当前登录的管理员用户名
    globalSettings: {   //  项目全局设置信息
      apiUrl: 'http://127.0.0.1:8090'  //初始默认值
    }
  },
  //公共数据修改方法: this.$store.commit('setAdminName','laomoxian')
  //公共数据修改方法: this.$store.commit('setGlobalSettings','{}')
  mutations: {          //修改state数据，类似Vue组件对象methods 保证数据响应式
    setAdminName(state,value){
      state.adminName=value
    },
    setGlobalSettings(state,value){
      state.globalSettings=value
    }
  }
 
})
