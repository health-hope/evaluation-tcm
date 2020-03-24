<template>
    <div v-if="show" class="home" :style="{ backgroundImage: `url(${ homeData.indexImageUrl })`}">
        <!-- 内容 -->
        <div class="ctn">
            <!-- 适合人群 -->
            <div class="ctn-top">
                <div class="title">
                    <span class="mon" v-if="homeData.suitCrowd">{{ homeData.suitCrowd.title }}</span>
                    <span class="time">
                        <img class="icon" :src="'sy_icon_sj.png' | PUBLIC_PATH">
                        约{{ homeData.timeLen }}分钟
                    </span>
                </div>
                <ul class="content" v-if="homeData.suitCrowd">
                    <li class="item" v-for="(item, i) in homeData.suitCrowd.dataList" :key="i">
                        <div class="img">
                            <img :src="item.imageUrl">
                        </div>
                        <div class="text">{{ item.content }}</div>
                    </li>
                </ul>
            </div>
            <!-- 你将收获 -->
            <div class="ctn-top">
                <div class="title">
                    <span class="mon" v-if="homeData.gains">{{ homeData.gains.title }}</span>
                </div>
                <ul class="content" v-if="homeData.gains">
                    <li class="item" v-for="(item, i) in homeData.gains.dataList" :key="i">
                        <div class="img">
                            <img :src="item.imageUrl">
                        </div>
                        <div class="text">{{ item.content }}</div>
                    </li>
                </ul>
            </div>
            <!-- bg 元素 -->
            <LayBg/>
        </div>
        <!-- logo -->
        <div class="logo">
            <img :src="'sy_logo_jkyy.png' | PUBLIC_PATH" alt>
        </div>
        <p class="remark">北京健康有益科技有限公司提供技术服务</p>
        <!-- 开始测评 -->
        <div
            class="button tap_events"
            href="javascript:;"
            @click="start"
            :style="{backgroundImage: 'url(sy_button_bg.png)'}  | PUBLIC_PATH"
        >开始测评</div>
        <div class="btn">评估结果仅供参考，不代表医生诊断</div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex'
    import { getUrlParam } from '@/assets/js/util.js'
    import { apiHomeData, apiLatestData } from '@/service/api/home'
    import LayBg from '@/components/common/LayBg';
    export default {
        data() {
            return {
                homeData: {},
                show: false
            }
        },
        components: {
            LayBg
        },
        computed: {
            ...mapState(['evaluationCode', 'userInfo']),
        },
        async created() {
            let userId = getUrlParam('user-id')
            if(!userId) {
                this.setUserId(null)
            }
            // 判断是不是重新测评
            // 查看有没有做过评测
            // 查看有没有用户
            if (this.userInfo.userId && this.$route.query.again != 1) {
                await this.look()
            }else {
                // 加载中医测封面内容。
                await this.getBrief()
            }
        },
        methods: {
            ...mapMutations(['setEvaluationId','setUserId']),
            async getBrief() {
                const data = await apiHomeData(this.evaluationCode)
                this.homeData = data.data
                this.show = true
            },
            start() {
                this.$router.push('/survey')
            },
            async look() {
                const res = await apiLatestData(this.evaluationCode, this.userInfo.userId)
                if (res.evaluationId) {
                    this.setEvaluationId(res.evaluationId)
                    this.$router.push('/presentation')
                }else{
                    // 加载中医测封面内容。
                    this.getBrief()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/style/mixin.scss";
    .home {
        width: 100%;
        min-height: 100%;
        padding: 16.7rem 0.75rem 0;
        box-sizing: border-box;
        background-size: 100% auto;
        background-repeat: no-repeat;
        @include bg_color1();
        .ctn {
            @include bg_color6();
            @include box_shodow1(0 0.3rem 1rem 0);
            border-radius: 0.2rem;
            padding: 1.35rem 1.05rem 0.3rem;
            box-sizing: border-box;
            position: relative;
            .ctn-top {
                margin-bottom: 1.15rem;
                .title {
                    position: relative;
                    height: 1.4rem;
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.7rem;
                    .mon {
                        font-size: 0.85rem;
                        @include font_color4();
                        font-weight: bold;
                    }
                    .time {
                        display: inline-block;
                        position: absolute;
                        right: -0.25rem;
                        top: -0.1rem;
                        width: 4.95rem;
                        height: 1.4rem;
                        @include bg_color7();
                        border-radius: 0.1rem;
                        font-size: 0.65rem;
                        @include font_color4();
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        .icon {
                            width: 0.9rem;
                            height: 0.9rem;
                            margin-right: 0.2rem;
                        }
                    }
                }
                .content {
                    position: relative;
                    .item {
                        margin-bottom: 0.5rem;
                    }
                    .img {
                        width: 1.2rem;
                        height: 1.2rem;
                        position: absolute;
                        left: 0;
                        right: 0;
                        img {
                            width: 100%;
                            height: 100%;
                            display: inline-block;
                            border-radius: 50%;
                        }
                    }
                    .text {
                        font-size: 0.75rem;
                        @include font_color5();
                        line-height: 1.2rem;
                        margin-left: 1.65rem;
                    }
                }
            }
        }
        .logo {
            margin-bottom: 0.5rem;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 4.3rem;
                height: auto;
            }
        }
        .remark {
            opacity: 0.6;
            font-size: 0.55rem;
            line-height: 0.55rem;
            @include font_color();
            text-align: center;
            margin-bottom: 4.25rem /* 170/40 */;
        }
        .button {
            width: 15.5rem;
            height: 2.5rem;
            @include box_shodow(0 12px 30px 0);
            border-radius: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            @include font_color6();
            position: fixed;
            bottom: 1.85rem /* 74/40 */;
            left: 50%;
            transform: translateX(-50%);
            background-position: center center;
            @include bg_color();
            background-repeat: no-repeat;
            background-size: 15rem 2rem;
            font-weight: bold;
        }
        .btn {
            opacity: 0.6;
            font-size: 0.55rem;
            @include font_color();
            text-align: center;
            padding-bottom: 0.6rem;
            box-sizing: border-box;
        }
    }
</style>
