<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="stylus">
    body,html,p,ul,li
        margin 0
        padding 0
    body,html,#app
        height 100%
        width 100%
    #app
        min-width 1024px
        max-height 910px
        background-image url("./assets/images/bj.jpg")
        background-size cover
        background-position center
</style>
