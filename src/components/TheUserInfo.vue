<template lang="html">
  <div class="userinfo">
    <!-- ログイン後 -->
    <div class="media" v-if="user" key="login">
      <div class="media-content">
        <div class="contents">
          <TheTimeLinePostArea :displayName="users.displayName" :uId="users.uid"/>
          <a class="button is-primary" @click="logout">ログアウト</a>
        </div>
      </div>
    </div>
    <!-- ログイン前 -->
    <div class="media" v-else key="logout">
      <a class="button is-primary" @click="login">Signin with Google</a>
    </div>
  </div>
</template>

<script>
import TheTimeLinePostArea from '@/components/TheTimeLinePostArea'
import firebase from 'firebase'
const provider = new firebase.auth.GoogleAuthProvider()

export default {
  name: 'TheUserInfo',
  data () {
    return {
      user: {},
      users: []
    }
  },
  components: {
    TheTimeLinePostArea
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        var _this = this
        _this.users = this.user
        console.log(_this.users.uid)
      } else {
        this.user = user
      }
    })
  },
  methods: {
    login () {
      firebase.auth().signInWithRedirect(provider).then(result => {
        this.user = result.user
        self.$data.userName.options = result.user
      })
      var _this = this
      _this.users = this.user
      console.log(_this.user)
    },
    logout () {
      firebase.auth().signOut()
    }
  }
}
</script>
