<template>
  <div id="app">
  <myNav></myNav>
    <router-view/>
  </div>
</template>
<script>
import myNav from './components/custom-nav';
export default {
  components: {
    myNav
  }
}
</script>
