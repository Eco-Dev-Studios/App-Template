import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    cart: 1,
  }),
  getters: {
    getTotalItemsInCart: (state) => {
      state.cart
    },
  },
  actions: {
    addItem() {
      this.cart++
    },
  },
})
