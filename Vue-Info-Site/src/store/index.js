import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'
import db from '../utils/firebaseInit'

vue.use(vuex)

let store = new vuex.Store({

    state:{
        cards:{}
    },

    mutations:{
        setCards(state, payload) {
            state.cards = payload
        }
    }
    


})