<template>
  <div class="error">
    Oops, {{msg}}
    <p><small>looks like a rat chewed up some wires. Know any exterminators, please let us know?</small></p>
  </div>
</template>

<script>
  export default {
    name : 'Error',
    props : ['msg']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    margin : 40px 0;
  }
</style>
