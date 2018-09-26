<template>
  <div class="timeline">
    <ul>
      <div v-if="isLoaded">
        <transition-group name="post">
          <Post class="post" v-for="(post, key) in posts" :key="key" :name="post.name" :message="post.message" :charNo="post.charNo" v-if="post" />
        </transition-group>
      </div>
      <div class="loading-wrapper" v-else>
        <div class="loading">loading...</div>
      </div>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
import Post from '@/components/Post'

export default {
  data () {
    return {
      posts: [],
      isLoaded: false
    }
  },
  components: {
    Post
  },
  created: function () {
    var _this = this
    firebase.database().ref('posts').on('value', function (snapshot) {
      _this.posts = snapshot.val()
    })
    this.isLoaded = true
  }
}
</script>
