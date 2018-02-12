<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*, body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222B32;
}
</style>
