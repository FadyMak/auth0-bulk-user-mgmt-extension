import Vue from 'vue'
import Vuex from 'vuex'
import { fetchUsers } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },

  actions: {
    get_users ({ commit, dispatch, state }) {
      let users = fetchUsers('')
      commit('SET_USERS', { users })
    },
    toggle_all_users ({ commit, dispatch, state }, allSelected) {
      commit('TOGGLE_ALL_USERS', { allSelected })
    },
    toggle_user ({ commit, dispatch, state }, user) {
      commit('TOGGLE_USER', user)
    }
  },

  mutations: {
    SET_USERS: (state, { users }) => {
      users.forEach(item => {
        item.selected = false
      })
      state.users = users
    },
    TOGGLE_ALL_USERS: (state, { allSelected }) => {
      state.users.forEach(item => {
        item.selected = !allSelected
      })
    },
    TOGGLE_USER: (state, user) => {
      let toggledUser = state.users.filter(u => u === user)[0]
      toggledUser.selected = !toggledUser.selected
    }
  },

  getters: {
    users: state => {
      return state.users
    }
  }
})

export default store
