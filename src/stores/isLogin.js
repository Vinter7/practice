import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLogin = defineStore('islogin', () => {
  const login = ref(false)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { login }
})
