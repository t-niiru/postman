<template>
  <div class="timeline">
    <ul>
      <transition-group name="post">
        <Post class="post" v-for="(post, key) in posts" :key="key" :name="post.name" :message="post.message" :charNo="post.charNo" v-if="post" />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
import Post from '@/components/Post'

export default {
  data () {
    return {
      posts: []
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
  }
}
</script>
