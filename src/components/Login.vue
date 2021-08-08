<template>
  <div class="hello">
    <Menu />
    <div class="form-group">
      <input type="text" v-model="email" class="form-control" placeholder="Input your email ...">
      <div><button @click="login" class="btn btn-md btn-primary">Login</button></div>
    </div>
  </div>
</template>

<script>
import Menu from './partial/Menu.vue'
import user from '@/library/user'
/* global $mtotp */

export default {
  name: 'HelloWorld',
  components: { Menu },
  props: {
    msg: String
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    login () {
      if ($mtotp) {
        $mtotp.open({ email: this.email })
          .then((result) => {
            return user.getUser(result.data.userAuthId)
          })
          .then((result) => {
            localStorage.userData = JSON.stringify(result)
            this.$router.push('/member-area')
          })
          .catch((err) => {
            console.log('failed to login', err)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
