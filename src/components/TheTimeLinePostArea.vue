<template lang="html">
  <form class="postarea" @submit.prevent="doPost">
    <div class="input-contents">
      <div class="input-list">
        <div class="input-name">
          <p>Name：{{ displayName }}</p>
        </div>
        <div class="input-body">
          <b-field label="Message:">
            <b-input maxlength="200" type="textarea" placeholder="What's happening?" v-model.trim="message"></b-input>
          </b-field>
        </div>
      </div>
      <div class="input-submit">
        <button class="button is-primary" type="submit">
          POST
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'TheTimeLinePostArea',
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
  }
}
</script>

<style lang="scss" scoped>
.input-contents{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.input-list{
  width: 100%;
  max-width: 750px;
}
.input-body /deep/ {
  margin: 0 auto;
  .label {
    display: block;
  }
  .textarea {
    resize: none;
  }
}
.control /deep/{
  .help{
    &.counter{
      position: absolute;
      top: -20px;
      right: 0;
    }
  }
}
</style>
