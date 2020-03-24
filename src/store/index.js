import Vue from 'vue'
import Vuex from 'vuex'
import survey from './modules/survey'
Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate"
const store = new Vuex.Store({
    state: {
        evaluationCode: '',
        userInfo: {},
        evaluationId: '',   // 报告id
    },
    mutations: {
        setEvaluationCode(state, paylod) {
            state.evaluationCode = paylod
        },
        setUserId(state, paylod) {
            state.userInfo.userId = paylod
        },
        setWeight(state, paylod) {
            state.userInfo.weight = paylod
        },
        setHeight(state, paylod) {
            state.userInfo.height = paylod
        },
        setBirthday(state, paylod) {
            state.userInfo.birthday = paylod
        },
        setGender(state, paylod) {
            state.userInfo.gender = paylod
        },
        setActivityLevel(state, paylod) {
            state.userInfo.activityLevel = paylod
        },
        setEvaluationId(state, paylod) {
            state.evaluationId = paylod
        }
    },
    modules: {
        survey
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})
export default store
