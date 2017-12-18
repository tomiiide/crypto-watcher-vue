<template>
  <div class="crypto-item">
    <div class="details">
    <img :src=" symbol | getIcon " alt="">
    <span class="name">{{name}} ({{symbol}})</span>
    <span class="price">$ {{price}}</span>
    </div>
    <div class="meta">
      <span>% change</span>
      <span> 24H: {{percentChange24h}}</span>
      <span> 7D:{{percentChange7d}}</span>
    </div>
  </div>
</template>

<script>
import filters from '../utils/filters'
export default {
  name: 'CryptoItem',
  filters : filters,
  props : [
    'name',
    'symbol',
    'image',
    'price',
    'percentChange24h',
    'percentChange7d'
    ] ,
  data () {
    return {
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .crypto-item{
   display : flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;
   padding : 20px;
   margin : 10px 5px;
   box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.2);
 }

 .crypto-item .details{
   display: flex;
   justify-content: flex-start;
   font-size : 18px;
   position: relative;
 }

 .crypto-item .details span{
   width : 50%;
   text-align: left;
   padding : 0 40px;
   
 }

 .crypto-item .details img{
    position: relative;
    width: 10%;
    height: 100%;
 }

 .crypto-item .meta{
   display: flex;
   justify-content: flex-start;
   font-size: 12px;
   padding : 20px 0 0;
 }

 .crypto-item .meta span{
   padding : 0 40px;
 }
</style>
