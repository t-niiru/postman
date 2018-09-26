<template>
  <li class="media">
    <div class="media-content">
      <div class="content">
        <img :src="require('../assets/images/' + charNo + '.gif')">
        <div class="user-name"><strong>Name:{{ name }}</strong></div>
        <div class="massege-body"><span v-html="formattedPost" /></div>
      </div>
    </div>
  </li>
</template>

<script>
import h from 'htmlspecialchars'
import { link } from 'autolinker'

export default {
  props: [
    'name',
    'body',
    'charNo',
    'date',
    'uid'
  ],
  computed: {
    formattedPost () {
      // return this.body
      return link(h(this.body))
    }
  }
}
</script>
