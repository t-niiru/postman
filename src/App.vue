<template lang="html">
  <div id="app" class="wrapper">
    <h1 class="title">postman</h1>
    <section class="timeline">
      <TheTimeLine/>
    </section>
    <section class="postarea">
      <TheUserInfo/>
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
.wrapper{
  position: relative;
  height: 100%;
}
.timeline{
  height: calc(100% - 250px);
  overflow-y: scroll;
}
.postarea{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #000;
}
</style>
