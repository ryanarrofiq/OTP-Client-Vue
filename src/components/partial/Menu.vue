<template>
  <ul class="nav nav-pills justify-content-center">
    <li class="nav-item">
      <router-link to="/" class="nav-link active">Home</router-link>
    </li>
    <li v-if="isLoggedIn" class="nav-item">
      <router-link to="/member-area" class="nav-link">Member Area</router-link>
    </li>
    <li v-if="isLoggedIn" class="nav-item">
      <router-link to="/logout" class="nav-link">Logout</router-link>
    </li>
    <li v-if="!isLoggedIn" class="nav-item">
      <router-link to="/login" class="nav-link">Login</router-link>
    </li>
  </ul>
</template>

<script>
import user from '@/library/user'

export default {
  name: 'Menu',
  computed: {
    isLoggedIn () { return user.isLoggedIn() }
  }
}
</script>