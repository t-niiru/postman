<template lang="html">
  <div class="userinfo">
    <!-- ログイン後 -->
    <div class="signined" v-if="user" key="Signin">
      <div class="media-content">
        <div class="contents">
          <TheTimeLinePostArea :displayName="users.displayName" :uId="users.uid"/>
        </div>
      </div>
      <button class="button is-primary singn" :v-ga="$ga.event('user', 'click', 'label', 'Singnout')" @click="Singnout">Singnout</button>
    </div>
    <!-- ログイン前 -->
    <div class="signin" v-else key="logout">
      postするにはgoogleアカウントでログインしてください。
      <button class="button is-primary" :v-ga="$ga.event('user', 'click', 'label', 'Signin')" @click="Signin">Signin with Google</button>
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
      user: [],
      users: []
    }
  },
  components: {
    TheTimeLinePostArea
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.users = user
        var charNo = this.users.displayName.charCodeAt(0) % 20
        firebase.database().ref('/users/' + user.uid).set({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          charno: charNo
        })
      } else {
        this.user = user
      }
    })
  },
  methods: {
    Signin () {
      firebase.auth().signInWithRedirect(provider).then(result => {
        this.user = result.user
        self.$data.userName.options = result.user
      })
      var _this = this
      _this.users = this.user
    },
    Singnout () {
      firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.signined{
  .singn{
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
