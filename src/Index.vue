<!--
 * @Author: your name
 * @Date: 2021-06-21 10:42:40
 * @LastEditTime: 2021-06-25 13:17:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\src\Index.vue
-->
<template>
    <div id="Index">
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
import VFooter from '@/components/footer/VFooter'
import api from '@/http/api'
export default {
    name: 'Index',
    data () {
        return {
        }
    },
    components: {
        VFooter
    },
    computed: {

    },
    methods: {
        
    },
    create () { 
        
    },
    mounted () {
        let res = this.axios.get('https://httpbin.org/get')
        let res1 = this.axios.post('https://httpbin.org/post',{pageNum: 1,pageSize: 11})
    }
}
</script>