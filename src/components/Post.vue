<template>
  <li class="media">
    <div class="media-content">
      <div class="content">
        <img :src="require('../assets/images/' + charNo + '.gif')">
        <p>
          <strong>{{ name }} があらわれた</strong>
          <span v-html="formattedPost" />
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    'name',
    'body',
    'charNo',
    'date'
  ],
  computed: {
    formattedPost () {
      // console.log(this.charNo)
      return this.body
    }
  }
}
</script>
