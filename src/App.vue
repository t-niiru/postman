<template>
  <div id="app">
    <h1 class="title">postman</h1>
    <section class="container">
      <div class="timeline">
        <TheTimeLine/>
      </div>
      <div class="postarea">
        <TheUserInfo/>
      </div>
    </section>
  </div>
</template>

<script>
import 'ress'
import '@/assets/stylesheets/style.scss'
import TheUserInfo from '@/components/TheUserInfo'
import TheTimeLine from '@/components/TheTimeLine'

export default {
  name: 'App',
  components: {
    TheUserInfo,
    TheTimeLine
  }
}
</script>

<style lang="scss" scoped>
  .title {
    color: #fff;
  }
</style>
