<template lang="html">
  <form class="postArea" @submit.prevent="doPost">
    <div class="input-contents">
      <div class="input-name">
        <p>Name：{{ displayName }}</p>
      </div>
      <div class="input-body">
        <b-field label="Message:">
          <b-input maxlength="200" type="textarea" placeholder="What's happening?" v-model.trim="message"></b-input>
        </b-field>
      </div>
      <div class="input-submit">
        <button class="submit" type="submit">
          つぶやく
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
  props: [
    'displayName',
    'uId'
  ],
  data () {
    return {
      message: '',
      date: ''
    }
  },
  methods: {
    async doPost () {
      if (this.message === '') {
        return
      }
      firebase
        .database().ref('posts').push({
          name: this.displayName,
          message: this.message,
          date: moment(new Date()).format('YYYY/MM/DD HH:mm'),
          uid: this.uId
        })
      this.message = ''
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 16px;
}
.input-name {
  width: 300px;
  margin: 0 auto;
}
.input-body {
  width: 300px;
  margin: 0 auto;
  .label {
    display: block;
  }
  .textarea {
    resize: none;
  }
}
</style>
