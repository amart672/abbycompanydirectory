<script setup>
  import { ref } from 'vue'

  import { useRouter, useRoute } from 'vue-router'

  import { useAuth } from '@/composables/useAuth'
  const { login, logout } = useAuth()
  const router = useRouter()
  const route = useRoute()

  const username = ref('')
  const password = ref('')

  const logUserIn = async () => {
    if (await login(username.value, password.value)) {
      if (route.query.redirect) {
        router.push(route.query.redirect)
      } else {
        router.push({ name: 'Home' })
      }
    } else {
      logout()
    }
  }
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit" class="bg-green-800 px-4 py-2 hover:bg-green-600">Login</button>
  </form>
</template>

<style lang="postcss">
  .login-form {
    @apply mx-auto mt-80 flex max-w-lg flex-col gap-8 rounded-lg bg-slate-700 p-10 shadow-lg;
    &-input {
      @apply rounded-lg px-8 py-4 text-2xl ring-2 ring-slate-400;
    }
  }
</style>
