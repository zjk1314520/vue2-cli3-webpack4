<!--
 * @Author: your name
 * @Date: 2021-06-23 10:18:44
 * @LastEditTime: 2021-06-24 13:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\src\components\footer\tabbar.vue
-->
<template>
  <div id="tabbar" @click="getPath" class="flex-cln-ctr" :style="backgroundStyle">
    <div class="tab-icon-default tab-item" v-show="isActive">
      <slot name="icon-default"></slot>
    </div>
    <div class="tab-icon-active tab-item" v-show="!isActive">
      <slot name="icon-active"></slot>
    </div>
    <div class="tab-font tab-item" :style="colorStyle">
      <slot name="font"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  props: {
    path: String,
    colorActive: {
      type: String,
      default: 'white'
    },
    backgroundActive: {
      type: String,
      default: 'deeppink'
    }
  },
  computed: { 
    isActive () {
      return this.$route.path.indexOf(this.path) == -1
    },
    colorStyle () {
      return !this.isActive ? {color: this.colorActive} : {}
    },
    backgroundStyle () {
      return !this.isActive? {backgroundColor: this.backgroundActive} : {}
    }
  },
  methods: {
    getPath () {
      this.$router.push(this.path).catch(err => err)
    }
  }
}
</script>
<style lang="scss" scoped>
#tabbar {
  flex: 1;
  height: inherit;
  .tab-item {
    width: 100%;
    text-align: center;
    i {
      font-size: 20px;
    }
  }
  .tab-font { 
    color: red;
  }
  .tab-icon-default {
    i {
      color: red;
    }
  }
  .tab-icon-active {
    i {
      color: white;
    }
  }
}
</style>