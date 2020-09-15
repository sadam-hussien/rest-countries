import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
    },
    mutations: {
        TOGGLE_THEME(state, value) {
            state.darkTheme = value;
        }
    },
    actions: {
    },
    modules: {
    }
})
