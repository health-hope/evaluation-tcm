<template>
    <div id="app" v-cloak>
        <keep-alive>
            <transition name="fade" mode="out-in">
                <router-view v-if="$route.meta.cache"></router-view>
            </transition>
        </keep-alive>
        <transition name="fade"  mode="out-in">
            <router-view v-if="!$route.meta.cache"></router-view>
        </transition>
    </div>
</template>
<script>
import { getUrlParam } from '@/assets/js/util.js'
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            onLine: navigator.onLine,
        }
    },
    computed: {
        ...mapState(['evaluationCode'])
    },
    created() {
        let evaluationCode = getUrlParam('code')
        let userId = getUrlParam('user-id')
        if(evaluationCode) {
            this.setEvaluationCode(evaluationCode)
        }else {
            this.$toast('测评编码不能为空！')
        }
        if(userId) {
            this.setUserId(userId)
        }
    },
    mounted() {
        window.document.documentElement.setAttribute('data-theme', this.evaluationCode)
        window.addEventListener('offline', this.updateOnlineStatus);
    },
    methods: {
        ...mapMutations(['setEvaluationCode', 'setUserId']),
        updateOnlineStatus(e) {
            const { type } = e;
            this.onLine = type === 'online';
            if(this.onLine !== 'online') {
                this.$toast('网络好像有点问题，请检查后重试！')
            }
        }
    },
    beforeDestroy(){
        window.removeEventListener('offline', this.updateOnlineStatus);
    }
}
</script>
<style lang="less">
    //  1px 解决方案
    @import "~vux/src/styles/1px.less";
    html,body,#app {
        width:100%;
        height: 100%;
    }
</style>
