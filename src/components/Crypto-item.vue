<template>
  <li class="crypto-item">
    <img src="" alt="">
    <span class="name">{{name}}</span>
    <span class="price">{{price}}</span>
    <div class="meta">
      <span>{{percent_change24H}}</span>
      <span>{{percent_change7d}}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CryptoItem',
  props : ['name','image','price','percent_change24H','percent_change7d'] ,
  data () {
    return {
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .crypto-item{

 }
</style>
