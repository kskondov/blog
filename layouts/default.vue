<template>
  <div>
    <Header @sidenavToggle="displaySideNav = !displaySideNav"/>
    <SideNav 
      :show="displaySideNav"
      @close="displaySideNav=false"/>
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/navigation/Header'
import SideNav from '~/components/navigation/Sidenav'

export default {
  components: {
    SideNav,
    Header
  },
  data () {
    return {
      displaySideNav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Indie Flower', cursive; 
  margin: 0px;
}
</style>
