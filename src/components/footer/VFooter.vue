<!--
 * @Author: Mr.zhang
 * @Date: 2021-06-23 10:15:00
 * @LastEditTime: 2021-06-24 13:24:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\src\components\footer\VFooter.vue
-->
<template>
  <div id="Footer" class="flex-ctr">
      <tab-bar path="/index" class="item">
        <i slot="icon-default" class="iconfont icon-home"></i>
        <i slot="icon-active" class="iconfont icon-home"></i>
        <div slot="font">首页</div>
      </tab-bar>
      <tab-bar path="/discover" class="item">
        <i slot="icon-default" class="iconfont icon-Discovery"></i>
        <i slot="icon-active" class="iconfont icon-Discovery"></i>
        <div class="font" slot="font">发现</div>
      </tab-bar>
      <tab-bar path="/order" class="item">
        <i slot="icon-default" class="iconfont icon-dingdan"></i>
        <i slot="icon-active" class="iconfont icon-dingdan"></i>
        <div class="font" slot="font">订单</div>
      </tab-bar>
      <tab-bar path="/my" class="item">
        <i slot="icon-default" class="iconfont icon-my"></i>
        <i slot="icon-active" class="iconfont icon-my"></i>
        <div class="font" slot="font">我的</div>
      </tab-bar>
  </div>
</template>
<script>
import TabBar from './tabbar.vue'
export default {
  name: 'Footer',
  data () {
    return {}
  },
  components: { 
    TabBar
  },
  computed: {

  }
}
</script>
<style scoped lang="scss">
@import url('@/commen/scss/footer.scss');
</style>