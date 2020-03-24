<template>
    <div class="programme">
        <template v-for="(item,index) in planContent">
            <section class="item" v-if="item.templateType === 'ZY_TL_YZ'" :key="`A${index}`">
                <div class="title" v-if="evaluationCode !='0'" :style="{ backgroundImage: `url(${ item.template.imageUrl })`}">
                    <div class="aft1px">
                        <div class="top">{{ item.template.title }}</div>
                        <div class="bottom">{{ item.template.content }}</div>
                    </div>
                </div>
                <!-- 体质测评特殊处理 -->
                <div class="title-0" v-else>
                    <div class="aft1px vux-1px">
                        <div class="top">{{ item.template.title }}</div>
                        <div class="bottom">{{ item.template.content }}</div>
                    </div>
                    <div class="imgc-c">
                        <img class="imgc" :src="item.template.imageUrl"/>
                    </div>
                </div>
                <div class="ctn ctn1" v-if="item.template && item.template.dataList.length > 0 && item.template.dataList[0].content">
                    <LayBg/>
                    <ul class="list">
                        <template v-for="(Aitem1, Aindex1) in item.template.dataList">
                            <li class="clearfix" :key="`A-1${Aindex1}`">
                                <div class="img">
                                    <img :src="Aitem1.imageUrl">
                                </div>
                                <div class="text">{{ Aitem1.content }}</div>
                            </li>
                        </template>
                    </ul>
                </div>
            </section>
            <section ref="item_1" class="item" v-if="item.templateType === 'ZY_YS_TL'" :key="`B${index}`">
                <BaseZyTempTitle bgClass="jgy_bg_1" :tempTitle="item.template.title"/>
                <div :class="toggleFlag?'ctn ctn111':'ctn'">
                    <LayBg/>
                    <template v-if="item.template.recommendFood">
                        <div
                            class="recommend"
                            :style="{ backgroundImage: `url(${item.template.recommendFood.imageUrl})` }"
                        >{{ item.template.recommendFood.title }}</div>
                        <ul class="list1 vux-1px">
                            <template
                                v-for="(Bitem1, Bindex1) in item.template.recommendFood.dataList"
                            >
                                <li :key="`B1${Bindex1}`">
                                    <div class="tip">
                                        {{ Bitem1.subTitle }}
                                        <img
                                            v-if="Bitem1.remark"
                                            @click="doShowToast(Bitem1.remark)"
                                            class="icon tap_events"
                                            :src="'tlfa_icon_ts.png' | PUBLIC_PATH"
                                        >
                                    </div>
                                    <div class="text">{{ Bitem1.content }}</div>
                                </li>
                            </template>
                        </ul>
                    </template>
                    <template v-if="item.template.recommendHerbal">
                        <div
                            class="recommend"
                            :style="{ backgroundImage: `url(${item.template.recommendHerbal.imageUrl})` }"
                        >{{ item.template.recommendHerbal.title }}</div>
                        <ul class="list2 clearfix">
                            <template
                                v-for="(Bitem2, Bindex2) in item.template.recommendHerbal.dataList"
                            >
                                <li :key="`B2${Bindex2}`">
                                    <div class="img vux-1px">
                                        <img :src="Bitem2.imageUrl">
                                    </div>
                                    <div class="text">{{ Bitem2.subTitle }}</div>
                                </li>
                            </template>
                        </ul>
                    </template>
                    <template v-if="item.template.dietTaboo">
                        <div
                            class="recommend"
                            :style="{ backgroundImage: `url(${item.template.dietTaboo.imageUrl})` }"
                        >{{ item.template.dietTaboo.title }}</div>
                        <ul class="list1 vux-1px">
                            <template v-for="(Bitem3, Bindex3) in item.template.dietTaboo.dataList">
                                <li :key="`B3${Bindex3}`">
                                    <div class="tip">{{ Bitem3.subTitle }}</div>
                                    <div class="text">{{ Bitem3.content }}</div>
                                </li>
                            </template>
                        </ul>
                    </template>
                    <div @click="toggle('item_1')" class="toggle tap_events">
                        <div class="toggle-c">
                            <img
                                :class="toggleFlag?'select':'select1'"
                                :src="'tlfa_icon_sq.png' | PUBLIC_PATH"
                            >
                            {{ toggleFlag?'收起':'展开' }}
                        </div>

                        <img class="show" :src="'fay_bg_zksq.png' | PUBLIC_PATH">
                    </div>
                </div>
            </section>
            <section ref="item_2" class="item" v-if="item.templateType === 'ZY_QJ_TL'" :key="`C${index}`">
                <BaseZyTempTitle bgClass="jgy_bg_2" :tempTitle="item.template.title"/>
                <div :class="toggleFlag1?'ctn ctn111':'ctn'">
                    <LayBg/>
                    <div class="qiju">
                        <div
                            class="picker"
                            v-for="(Citem1, Cindex1) in item.template.dataList"
                            :key="`C1${Cindex1}`"
                        >
                            <div class="img vux-1px">
                                <img :src="Citem1.imageUrl">
                            </div>
                            <div class="tips">
                                <div class="top">{{ Citem1.subTitle }}</div>
                                <div class="text" v-if="setText(Citem1.content).length == Citem1.content.length || Citem1.toggleFlag222">
                                    {{Citem1.content}}
                                    <img v-if="Citem1.toggleFlag222" @click="toggle222(Citem1)" class="toggle222 tap_events" :src="'tlfa_icon_hui_zk.png' | PUBLIC_PATH" >
                                </div>
                                <div class="text" v-else>
                                    {{`${setText(Citem1.content)}${limt}`}}
                                    <img @click="toggle222(Citem1)" :class="Citem1.toggleFlag222?'toggle222 tap_events':'toggle2221 tap_events'" :src="'tlfa_icon_hui_zk.png' | PUBLIC_PATH" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="toggle1('item_2')" class="toggle tap_events">
                        <div class="toggle-c">
                            <img
                                :class="toggleFlag1?'select':'select1'"
                                :src="'tlfa_icon_sq.png' | PUBLIC_PATH"
                            >
                            {{ toggleFlag1?'收起':'展开' }}
                        </div>

                        <img class="show" :src="'fay_bg_zksq.png' | PUBLIC_PATH">
                    </div>
                </div>
            </section>
            <section ref="item_3" class="item" v-if="item.templateType === 'ZY_YD_TL'" :key="`D${index}`">
                <BaseZyTempTitle bgClass="jgy_bg_3" :tempTitle="item.template.title"/>
                <div :class="toggleFlag2?'ctn ctn111':'ctn'">
                    <LayBg/>
                    <ul class="list3">
                        <template v-for="(Ditem1, Dindex1) in item.template.dataList">
                            <li class="list3-item" :key="`D1${Dindex1}`">
                                <img :src="Ditem1.imageUrl">
                                <div class="shuoming">
                                    <span class="tit">{{ Ditem1.subTitle }}</span>
                                    <span class="conts">{{ Ditem1.content }}</span>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <div class="list3-bto">
                        <div class="list3-bto-c vux-1px">
                            <div class="list3-bto-tit">{{ item.template.matters.title }}</div>
                            <template v-for="(Ditem2, Dindex2) in item.template.matters.dataList">
                                <p class="ctx" :key="`D2${Dindex2}`">
                                    <img class="icon1" :src="'tlfa_icon_zysx1.png' | PUBLIC_PATH">
                                    {{ Ditem2.content }}
                                </p>
                            </template>
                        </div>
                    </div>

                    <div @click="toggle2('item_3')" class="toggle tap_events">
                        <div class="toggle-c">
                            <img
                                :class="toggleFlag2?'select':'select1'"
                                :src="'tlfa_icon_sq.png' | PUBLIC_PATH"
                            >
                            {{ toggleFlag2?'收起':'展开' }}
                        </div>

                        <img class="show" :src="'fay_bg_zksq.png' | PUBLIC_PATH">
                    </div>
                </div>
            </section>
            <section ref="item_4" class="item" v-if="item.templateType === 'ZY_TS_TL'" :key="`E${index}`">
                <BaseZyTempTitle bgClass="jgy_bg_4" :tempTitle="item.template.title"/>
                <div :class="toggleFlag3?'ctn ctn111':'ctn'">
                    <LayBg/>
                    <div class="list4" v-if="item.template.dataList">
                        <template v-for="(Eitem1, Eindex1) in item.template.dataList">
                            <div class="list4-s" :key="`E1${Eindex1}`">
                                <img class="list4-s-icon" :src="'tlfa_icon_zysx1.png' | PUBLIC_PATH" alt>
                                <span>{{ Eitem1.content }}</span>
                                <span>{{ Eitem1.subTitle }}</span>
                            </div>
                        </template>
                    </div>
                    <div class="list4-re" v-if="item.template.cycleDesc">
                        <template v-for="(Eitem2, Eindex2) in item.template.cycleDesc">
                            <div class="list4-line vux-1px" :key="`E2${Eindex2}`">{{ Eitem2 }}</div>
                        </template>
                    </div>
                    <template v-if="item.template.acupointList">
                        <div
                            class="list4-bto"
                            v-for="(Eitem3, Eindex3) in item.template.acupointList"
                            :key="`E3${Eindex3}`"
                        >
                            <div class="list4-count">
                                <img :src="Eitem3.imageUrl">
                            </div>
                            <div class="list4-pto vux-1px">
                                <img :src="Eitem3.remark">
                            </div>
                            <div class="list4-bto-b">
                                <div class="top">
                                    <span>穴位：</span>
                                    <span>{{ Eitem3.subTitle }}</span>
                                </div>
                                <div class="bto">
                                    <span>位置：</span>
                                    <span>{{ Eitem3.content }}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div @click="toggle3('item_4')" class="toggle tap_events">
                        <div class="toggle-c">
                            <img
                                :class="toggleFlag3?'select':'select1'"
                                :src="'tlfa_icon_sq.png' | PUBLIC_PATH"
                            >
                            {{ toggleFlag3?'收起':'展开' }}
                        </div>

                        <img class="show" :src="'fay_bg_zksq.png' | PUBLIC_PATH">
                    </div>
                </div>
            </section>
        </template>

        <div class="button" v-if="planContent.length">
            <div :style="{backgroundImage: 'url(jgy_button_bg_bai.png)'} | PUBLIC_PATH" @click="retest" class="replay tap_events">再测一次</div>
            <div :style="{backgroundImage: 'url(jgy_button_bg_huang.png)'} | PUBLIC_PATH" @click="look" class="look tap_events">查看报告</div>
        </div>
        <!-- dialog -->
        <div v-transfer-dom>
            <x-dialog :hide-on-blur="true" v-model="showToast" class="dialog">
                <div class="content">
                    <div class="title">{{ dialogTitle }}</div>
                    <div class="text">{{ dialogText }}</div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>
<script>
    import LayBg from '@/components/common/LayBg';
    import { XDialog, TransferDomDirective as TransferDom } from 'vux'
    import { mapState, mapMutations } from 'vuex'
    import { getUrlParam } from '@/assets/js/util.js'
    import { apiZyCpReport } from '@/service/api/presentaion';
    import { apiLatestData } from '@/service/api/home'
    import BaseZyTempTitle from '@/components/common/BaseZyTempTitle';
    export default {
        data() {
            return {
                showToast: false,
                dialogTitle: '',
                dialogText: '',
                toggleFlag: false,
                toggleFlag1: false,
                toggleFlag2: false,
                toggleFlag3: false,
                planContent: [],
                remark: '',
                limt: '...',
                evaluationCode: '0'
            }
        },
        directives: {
            TransferDom
        },
        components: {
            LayBg,
            XDialog,
            BaseZyTempTitle
        },
        computed: {
            ...mapState(['evaluationId'])
        },
        async created() {
            // 如果有用户 根据用户查询evaluationId
            await this.searchId()
            await this.getData()
        },
        methods: {
            ...mapMutations(['setEvaluationId']),
            async searchId() {
                let evaluationCode = getUrlParam('code')
                this.evaluationCode = evaluationCode
                let userId = getUrlParam('user-id')
                if(evaluationCode && userId) {
                    const res = await apiLatestData(evaluationCode, userId)
                    if (res.evaluationId) {
                        this.setEvaluationId(res.evaluationId)
                    }
                }
            },
            async getData() {
                const res = await apiZyCpReport(this.evaluationId)
                console.log(res)
                this.planContent = res.planContent
            },
            doShowToast(val1) {
                let index = val1.indexOf('，') || val1.indexOf(',')
                this.dialogTitle = val1.substring(0, index)
                this.dialogText = val1.substring(Number(index) + 1)
                this.showToast = true
            },
            // 处理长度
            setText(val) {
                return val.substring(0,32)
            },
            // 展开收起
            toggle(val) {
                this.toggleFlag = !this.toggleFlag
                if(!this.toggleFlag) {
                    this.$nextTick(() => {
                        this.$refs[val][0].scrollIntoView()
                    })
                }
            },
            // 展开收起
            toggle1(val) {
                this.toggleFlag1 = !this.toggleFlag1
                if(!this.toggleFlag1) {
                    this.$nextTick(() => {
                        this.$refs[val][0].scrollIntoView()
                    })
                }
            },
            // 展开收起
            toggle2(val) {
                this.toggleFlag2 = !this.toggleFlag2
                if(!this.toggleFlag2) {
                    this.$nextTick(() => {
                        this.$refs[val][0].scrollIntoView()
                    })
                }
            },
            // 展开收起
            toggle3(val) {
                this.toggleFlag3 = !this.toggleFlag3
                if(!this.toggleFlag3) {
                    this.$nextTick(() => {
                        this.$refs[val][0].scrollIntoView()
                    })
                }
            },
            toggle222(Citem1) {
                Citem1.toggleFlag222 = !Citem1.toggleFlag222
                this.$forceUpdate()
            },
            // 再测一次
            retest() {
                this.$router.push({
                    path: '/',
                    query: {
                        again: 1
                    }
                })
            },
            // 查看报告
            look() {
                this.$router.push('presentation')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/style/mixin.scss";
    .programme {
        min-height: 100%;
        padding: 0.8rem 0.75rem /* 30/40 */;
        box-sizing: border-box;
        @include bg_color1();
        .item {
            box-sizing: border-box;
            @include box_shodow1(0 0.3rem 1rem 0);
            border-radius: 0.2rem /* 8/40 */;
            overflow: hidden;
            & + .item {
                margin-top: 0.8rem /* 32/40 */;
            }
            .title {
                width: 100%;
                height: 5.5rem /* 220/40 */;
                padding: 0.25rem /* 10/40 */;
                box-sizing: border-box;
                background-size: 100% auto;
                background-repeat: no-repeat;
                .aft1px {
                    width: 16.75rem /* 670/40 */;
                    height: 5rem /* 200/40 */;
                    .top {
                        padding-top: 0.75rem /* 30/40 */;
                        padding-left: 0.8rem /* 32/40 */;
                        padding-bottom: 0.3rem /* 12/40 */;
                        box-sizing: border-box;
                        font-size: 0.7rem /* 28/40 */;
                        line-height: 1rem /* 40/40 */;
                        @include font_color1();
                    }
                    .bottom {
                        padding-left: 0.8rem /* 32/40 */;
                        box-sizing: border-box;
                        font-size: 1.6rem /* 64/40 */;
                        @include font_color1();
                        line-height: 1.8rem /* 72/40 */;
                        font-family: "SourceHanSerifCN-Bold";
                        word-break: break-all;
                    }
                }
            }
            .title-0 {
                padding: 0.25rem /* 10/40 */;
                background-image: linear-gradient(38deg, #F4D8C4 0%, #F1CFB5 100%);
                box-shadow: 0 .3rem /* 12/40 */ 1rem /* 40/40 */ 0 rgba(211,170,160,0.10);
                border-radius: .2rem /* 8/40 */ .2rem /* 8/40 */ 0 0;
                position: relative;
                .imgc-c {
                    width: 8.225rem;
                    position: absolute;
                    top: 0.6rem;
                    right: 0.7rem;
                    z-index: 1;
                    .imgc {
                        width: 100%;
                        height: auto;
                    }
                }
                .aft1px {
                    width: 16.75rem /* 670/40 */;
                    padding-bottom: 1.05rem /* 42/40 */;
                    &::before{
                        border-color: #E4C1A6;
                        box-shadow: 0 .3rem /* 12/40 */ 1rem /* 40/40 */ 0 rgba(211,170,160,0.10);
                    }
                    .top {
                        padding-top: 0.75rem /* 30/40 */;
                        padding-left: 0.8rem /* 32/40 */;
                        padding-bottom: 0.3rem /* 12/40 */;
                        box-sizing: border-box;
                        font-size: 0.7rem /* 28/40 */;
                        line-height: 1rem /* 40/40 */;
                        @include font_color1();
                    }
                    .bottom {
                        padding-left: 0.8rem /* 32/40 */;
                        box-sizing: border-box;
                        font-size: 1.6rem /* 64/40 */;
                        @include font_color1();
                        line-height: 2rem /* 80/40 */;
                        font-family: "SourceHanSerifCN-Bold";
                        word-break: break-all;
                        position: relative;
                        z-index: 222;
                    }
                }
            }
            .ctn {
                width: 100%;
                @include bg_color6();
                padding: 0 1.05rem /* 42/40 */;
                box-sizing: border-box;
                position: relative;
                padding-bottom: 3.5rem;
                max-height: 17.8rem /* 712/40 */;
                overflow: hidden;
                transition: all 1s;
                .list {
                    li {
                        .img {
                            width: 1.7rem /* 68/40 */;
                            text-align: left;
                            float: left;
                            margin-top: -.1rem;
                            img {
                                width: 1.2rem /* 48/40 */;
                                height: 1.2rem /* 48/40 */;
                                border-radius: 50%;
                            }
                        }
                        .text {
                            width: 13.3rem /* 538/40 */;
                            float: left;
                            font-size: 0.75rem /* 30/40 */;
                            line-height: 1.05rem /* 42/40 */;
                            @include font_color4();
                            word-break: break-all;
                        }
                        &:nth-child(n + 2) {
                            margin-top: 0.475rem /* 19/40 */;
                        }
                    }
                }
                .recommend {
                    font-size: 0.85rem /* 34/40 */;
                    @include font_color4();
                    height: 2.6rem /* 104/40 */;
                    line-height: 1.2rem /* 48/40 */;
                    padding-left: 1.25rem /* 50/40 */;
                    margin-bottom: 0.6rem /* 24/40 */;
                    box-sizing: border-box;
                    position: relative;
                    padding-top: 1.4rem /* 56/40 */;
                    font-weight: bold;
                    background-repeat: no-repeat;
                    background-size: 0.75rem 0.75rem;
                    background-position-x: left;
                    background-position-y: 1.6rem;
                }
                .list1 {
                    padding: 0.8rem /* 32/40 */ 0.65rem /* 26/40 */;
                    box-sizing: border-box;
                    &::before {
                        @include border_color3();
                    }
                    li {
                        &:nth-child(n + 2) {
                            margin-top: 0.9rem /* 36/40 */;
                        }
                        .tip {
                            font-size: 0.8rem /* 32/40 */;
                            @include font_color1();
                            line-height: 1.125rem /* 45/40 */;
                            height: 1.125rem;
                            margin-bottom: 0.3rem /* 12/40 */;
                            display: flex;
                            align-items: center;
                            font-weight: bold;
                            .icon {
                                width: 0.81rem /* 32/40 */;
                                height: 0.81rem /* 32/40 */;
                                margin-left: 0.2rem /* 8/40 */;
                                z-index: 2;
                            }
                        }
                        .text {
                            font-size: 0.7rem /* 28/40 */;
                            @include font_color5();
                            line-height: 1rem /* 40/40 */;
                        }
                    }
                }
                .list2 {
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        & + li {
                            margin-left: 0.34rem /* 18/40 */;
                        }
                        &:nth-child(3n + 1) {
                            margin-left: 0;
                        }
                        .img {
                            width: 4.55rem /* 182/40 */;
                            height: 4.55rem /* 182/40 */;
                            padding-left: 0.17rem;
                            padding-right: 0.1rem;
                            padding-top: 0.14rem;
                            padding-bottom: 0.1rem;
                            margin-bottom: .4rem /* 16/40 */;
                            &::before {
                                @include border_color3();
                            }
                            img {
                                width: 100%;
                                height: 100%;
                                border: 0;
                            }
                        }
                        .text {
                            width: 4.55rem /* 182/40 */;
                            font-size: 0.75rem /* 30/40 */;
                            @include font_color8();
                            word-break: break-all;
                            font-weight: bold;
                            margin-bottom: .4rem /* 16/40 */;
                        }
                    }
                }
                .list3 {
                    padding-top: 1.4rem /* 56/40 */;
                    box-sizing: border-box;
                    .list3-item {
                        display: flex;
                        align-items: center;
                        &:nth-child(n + 2) {
                            margin-top: 0.7rem /* 28/40 */;
                        }
                        img {
                            width: 2.2rem /* 88/40 */;
                            height: 2.2rem /* 88/40 */;
                            border-radius: 50%;
                            margin-right: 0.5rem /* 20/40 */;
                        }
                        .shuoming {
                            display: flex;
                            justify-content: space-between;
                            .tit {
                                display: inline-block;
                                width: 5.35rem /* 214/40 */;
                                word-break: break-all;
                                font-size: 0.75rem /* 30/40 */;
                                @include font_color4();
                                font-weight: bold;
                            }
                            .conts {
                                width: 7.1rem /* 284/40 */;
                                text-align: right;
                                word-break: break-all;
                                font-size: 0.6rem /* 24/40 */;
                                @include font_color();
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;
                            }
                        }
                    }
                }
                .list3-bto {
                    width: 100%;
                    @include bg_color9();
                    padding: 0.25rem /* 10/40 */;
                    box-sizing: border-box;
                    padding-top: 0.2rem;
                    margin-top: 1.4rem /* 56/40 */;
                    .list3-bto-c {
                        padding: 0.55rem /* 22/40 */ 0.35rem /* 14/40 */;
                        box-sizing: border-box;
                        &::before {
                            @include border_color3();
                        }
                        .list3-bto-tit {
                            font-size: 0.8rem /* 32/40 */;
                            line-height: 1.125rem /* 45/40 */;
                            @include font_color1();
                            font-weight: bold;
                        }
                        .ctx {
                            font-size: 0.7rem /* 28/40 */;
                            @include font_color5();
                            line-height: 1.1rem /* 44/40 */;
                            margin-top: 0.4rem /* 16/40 */;
                            margin-left: 0.95rem /* 38/40 */;
                            position: relative;
                            .icon1 {
                                width: 0.45rem /* 18/40 */;
                                height: 0.45rem /* 18/40 */;
                                display: inline-block;
                                position: absolute;
                                top: 0.21rem;
                                left: -0.95rem;
                            }
                        }
                    }
                }
                .list4 {
                    padding-top: 1.4rem /* 56/40 */;
                    box-sizing: border-box;
                    position: relative;
                    &::before {
                        content: "";
                        position: absolute;
                        top: 1.4rem;
                        z-index: 22;
                        left: 0;
                        width: 0.45rem;
                        height: 0.4rem;
                        display: inline-block;
                        @include bg_color6();
                        @include bg_color6();
                    }
                    .list4-s {
                        @include border_left(1px solid);
                        margin-left: 0.225rem /* 9/40 */;
                        padding-left: 0.8rem;
                        box-sizing: border-box;
                        position: relative;
                        padding-bottom: 0.6rem /* 24/40 */;
                        box-sizing: border-box;
                        font-weight: bold;
                        .list4-s-icon {
                            width: 0.45rem /* 18/40 */;
                            height: 0.45rem /* 18/40 */;
                            background-repeat: no-repeat;
                            background-size: 0.45rem /* 18/40 */ 0.45rem /* 18/40 */;
                            @include bg_color6();
                            display: inline-block;
                            position: absolute;
                            z-index: 2;
                            left: -0.25rem;
                            top: 0.4rem;
                        }
                        span:nth-child(2) {
                            font-size: 0.8rem /* 32/40 */;
                            @include font_color4();
                            line-height: 1.125rem /* 45/40 */;
                        }
                        span:nth-child(3) {
                            font-size: 0.8rem /* 32/40 */;
                            @include font_color1();
                            line-height: 1.125rem /* 45/40 */;
                        }
                    }
                    .list4-s:last-child::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        z-index: 22;
                        left: -0.25rem;
                        top: 0.8rem;
                        width: 0.45rem;
                        height: 100%;
                        display: inline-block;
                        @include bg_color6();
                    }
                }
                .list4-re {
                    width: 100%;
                    @include bg_color9();
                    padding: 0.25rem /* 10/40 */;
                    box-sizing: border-box;
                    position: relative;
                    z-index: 22;
                    .list4-line {
                        padding: 0.55rem /* 22/40 */ 0.25rem /* 10/40 */;
                        font-size: 0.75rem /* 30/40 */;
                        @include font_color1();
                        font-weight: bold;
                        &::before {
                            @include border_color3();
                        }
                    }
                }
                .list4-bto {
                    width: 100%;
                    .list4-count {
                        height: 2.7rem /* 108/40 */;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 1.5rem /* 60/40 */;
                            height: 1.5rem /* 60/40 */;
                        }
                    }
                    .list4-pto {
                        width: 100%;
                        height: 8.5rem /* 340/40 */;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 0.6rem /* 24/40 */;
                        &::before {
                            @include border_color2();
                        }
                        img {
                            width: 14.85rem /* 594/40 */;
                            height: 8.2rem /* 328/40 */;
                        }
                    }
                    .list4-bto-b {
                        margin-top: 0.6rem /* 24/40 */;
                        & + .list4-pto {
                            margin-top: 0.6rem /* 24/40 */;
                        }
                        .top {
                            margin-bottom: 0.3rem /* 12/40 */;
                            font-weight: bold;
                            span:nth-child(1) {
                                @include font_color4();
                                font-size: 0.75rem /* 30/40 */;
                                line-height: 1.1rem /* 44/40 */;
                            }
                            span:nth-child(2) {
                                font-size: 0.75rem /* 30/40 */;
                                @include font_color1();
                                line-height: 1.1rem /* 44/40 */;
                            }
                        }
                        .bto {
                            font-weight: bold;
                            span:nth-child(1) {
                                @include font_color4();
                                font-size: 0.75rem /* 30/40 */;
                                line-height: 1.1rem /* 44/40 */;
                            }
                            span:nth-child(2) {
                                font-size: 0.75rem /* 30/40 */;
                                @include font_color1();
                                line-height: 1.1rem /* 44/40 */;
                            }
                        }
                    }
                }
                .qiju {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .picker {
                    padding-top: .8rem /* 32/40 */;
                    box-sizing: border-box;
                    &:nth-child(2n) {
                        margin-left: 0.45rem /* 18/40 */;
                    }
                    .img {
                        width: 7.35rem /* 294/40 */;
                        height: 7.35rem /* 294/40 */;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &::before {
                            @include border_color2();
                        }
                        img {
                            width: 7.05rem /* 282/40 */;
                            height: 7.05rem /* 282/40 */;
                        }
                    }
                    .toggle222 {
                        width: .475rem /* 19/40 */;
                        height: .425rem /* 17/40 */;
                        display: block;
                        margin: .8rem /* 32/40 */ auto 0;
                        transform: rotate(180deg);
                        transform-origin: 50% 25%;
                        transition: transform 0.2s ease-in;
                    }
                    .toggle2221 {
                        width: .475rem /* 19/40 */;
                        height: .425rem /* 17/40 */;
                        display: block;
                        margin: .8rem /* 32/40 */ auto 0;
                        transform: translateY(-50%);
                    }
                    
                    .tips {
                        width: 7.35rem /* 294/40 */;
                        .top {
                            font-size: 0.75rem /* 30/40 */;
                            line-height: 1.05rem /* 42/40 */;
                            @include font_color4();
                            word-break: break-all;
                            margin-top: 0.6rem /* 24/40 */;
                            margin-bottom: 0.4rem /* 16/40 */;
                            font-weight: bold;
                        }
                        .text {
                            font-size: 0.65rem /* 26/40 */;
                            line-height: 0.925rem /* 37/40 */;
                            @include font_color5();
                            word-break: break-all;
                        }
                    }
                }
                .toggle {
                    height: 2.375rem;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 100%;
                    z-index: 2;
                    @include bg_color6();
                    width: 15.5rem /* 600/40 */;
                    transform: translateX(-50%);
                    .toggle-c {
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        z-index: 1;
                        height: 3.375rem /* 135/40 */;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.65rem /* 26/40 */;
                        @include font_color10();
                    }
                    .show {
                        width: 100%;
                        height: 1rem;
                        position: absolute;
                        bottom: 2.3rem /* 135/40 */;
                        left: 0;
                    }
                }
                .select {
                    transform: translateY(-50%);
                    width: 0.475rem /* 19/40 */;
                    height: 0.425rem /* 17/40 */;
                    margin-right: 0.3rem /* 12/40 */;
                    margin-top: 0.5rem;
                }
                .select1 {
                    margin-top: 0.4rem;
                    width: 0.475rem /* 19/40 */;
                    height: 0.425rem /* 17/40 */;
                    margin-right: 0.3rem /* 12/40 */;
                    transform: rotate(180deg);
                    transform-origin: 50% 25%;
                    transition: transform 0.2s ease-in;
                }
            }
            .ctn111 {
                transition: all 1s !important;
                overflow: auto !important;
                max-height: initial !important;
            }
            .ctn1 {
                padding: 1.4rem /* 56/40 */ 1.05rem /* 42/40 */;
            }
            .title1 {
                width: 100%;
                height: 2.2rem /* 88/40 */;
                display: flex;
                align-items: center;
                padding-left: 1.05rem /* 42/40 */;
                font-size: 0.85rem /* 34/40 */;
                @include font_color6();
                box-sizing: border-box;
                background-size: 100% 100%;
            }
        }
        .button {
            width: 100%;
            height: 4.7rem /* 188/40 */;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .replay {
                font-weight: bold;
                width: 6.5rem /* 260/40 */;
                height: 2.5rem /* 100/40 */;
                @include box_shodow3(0 0.3rem 0.75rem 0);
                border-radius: 1.25rem /* 50/40 */;
                font-size: 0.9rem /* 36/40 */;
                @include font_color1();
                display: flex;
                align-items: center;
                justify-content: center;
                @include bg_color6();
                background-position: center center;
                background-repeat: no-repeat;
                background-size: 6rem /* 240/40 */ 2rem /* 80/40 */;
            }
            .look {
                font-weight: bold;
                width: 10.25rem /* 410/40 */;
                height: 2.5rem /* 100/40 */;
                @include box_shodow(0 0.3rem 0.75rem 0);
                border-radius: 1.25rem /* 50/40 */;
                font-size: 0.9rem /* 36/40 */;
                @include font_color6();
                display: flex;
                align-items: center;
                justify-content: center;
                @include bg_color();
                background-position: center center;
                background-repeat: no-repeat;
                background-size: 9.75rem /* 390/40 */ 2rem /* 80/40 */;
            }
        }
    }
    .dialog {
        /deep/ .weui-dialog {
            max-width: 16.25rem !important /* 650/40 */;
            width: 100% !important /* 650/40 */;
        }
        .content {
            padding: 1.3rem /* 52/40 */;
            box-sizing: border-box;
            @include bg_color6();
            @include box_shodow1(0 0.3rem 1rem 0);
            border-radius: 0.2rem /* 8/40 */;
            @include bg_color6();
            .title {
                font-size: 1rem /* 40/40 */;
                @include font_color4();
                text-align: center;
                line-height: 1.4rem /* 56/40 */;
                margin-bottom: 0.4rem /* 16/40 */;
                font-weight: bold;
            }
            .text {
                font-size: 0.8rem /* 32/40 */;
                @include font_color8();
                text-align: center;
                line-height: 1.25rem /* 50/40 */;
                font-weight: bold;
            }
        }
    }
</style>
