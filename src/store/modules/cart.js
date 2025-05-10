import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {

  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      state.list = state.list.map(item => {
        if (item.id === obj.id) item.count = obj.newCount
        return item
      })
      console.log(1)
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart/')
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) {
      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      console.log(res)
      context.commit('updateCount', obj)
    }
  }
}
