<template lang="html">
  <div v-if="isLoaded">
    <ul class="post-list">
      <Post class="post" v-for="(post, key) in posts" :key="key" :name="post.name" :message="post.message" :charNo="post.charNo" v-if="post" />
    </ul>
  </div>
  <div class="loading-wrapper" v-else>
    <div class="loading">loading...</div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Post from '@/components/TheTimeLinePostContents'

export default {
  name: 'TheTimeLine',
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
    console.log('TheTimeLine-end!!!')
  }
}
</script>
