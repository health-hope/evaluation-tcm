<template>
    <div class="questions-style clearfix">
        <div class="quesPhoto" 
            :style="{backgroundImage: 'url(jiqi.png)'}  | PUBLIC_PATH"
        ></div>
        <div class="questions-bg" v-if="!loading">
            <div class="speak-c">
                <LayBg/>
                <p class="speak">{{ text }}</p>
            </div>
        </div>
        <transition name="pull-up-remark">
            <div class="remark" v-show="!loading"></div>
        </transition>
        <div class="loading_box" v-if="loading">
            <lottie :options="defaultOptions"/>
        </div>
    </div>
</template>
<script>

    import * as animationData from "@/assets/lottie/dialogue.json";
    import * as animationFeiDC from "@/assets/lottie/eval_ques_zyfx_dcx.json";
    import * as animationGanDan from "@/assets/lottie/eval_ques_zygx_dx.json";
    import * as animationShen from "@/assets/lottie/eval_ques_zysx.json";
    import * as animationWeiPi from "@/assets/lottie/eval_ques_zywx_px.json";
    import LayBg from '@/components/common/LayBg';
    export default {
        data() {
            return {
                defaultOptions: { animationData: animationData.default },
            }
        },
        created(){
            switch (this.code) {
                default:
                case '1':
                case '7':
                    this.defaultOptions= { animationData: animationData.default }
                    break;
                case '2':
                case '9':
                    this.defaultOptions= { animationData: animationGanDan.default }
                    break;
                case '3':
                case '8':
                    this.defaultOptions= { animationData: animationFeiDC.default }
                    break;
                case '4':
                case '5':
                    this.defaultOptions= { animationData: animationWeiPi.default }
                    break;
                case '6':
                    this.defaultOptions= { animationData: animationShen.default }
                    break;
            }
        },
        components: {
            LayBg
        },
        props: {
            text: {
                type: String,
            },
            code:{
                type:String,
                default:'1'
            },
            loading: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>
<style lang="scss">
    .pull-up-remark-enter-active{
        transition: all .8s;
    }
    .pull-up-remark-enter,
    .pull-up-remark-leave-active {
        transform: translateX(-13.5rem);
    }
</style>
<style lang="scss" scoped>
    @import "@/assets/style/mixin.scss";
    .questions-style {
        padding-bottom: 1rem;
        position: relative;
        .quesPhoto {
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 50%;
            float: left;
            margin-right: 0.5rem;
            box-sizing: border-box;
            background-size: 100% 100%;
            background-position: center center;
        }
        .questions-bg {
            padding: 0.25rem;
            box-sizing: border-box;
            @include box_shodow1(0 0.3rem 1rem 0);
            border-radius: 0.2rem;
            @include bg_color6();
            max-width: 13.15rem;
            float: left;
            position: relative;
            .speak-c {
                padding: 0.35rem 0.65rem;
                box-sizing: border-box;
                .speak {
                    width: 100%;
                    font-size: 0.8rem;
                    @include font_color4();
                    line-height: 1.2rem;
                    word-break: break-all;
                }
            }
        }
        .remark {
            width: 14rem;
            @include bg_color1();
            position: absolute;
            top: -.5rem;
            left: 16rem;
            right: 0;
            bottom: .5rem;
            z-index: 222;
        }
    }
    .loading_box {
        padding-top: .75rem;
        width: 1.6rem /* 64/40 */;
        height: auto;
        float: left;
        box-sizing: border-box;
    }
</style>

