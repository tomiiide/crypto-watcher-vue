<template>
  <div class="crypto">
    <div class="cryto_list">
      <div v-if="status === 'FAILED'">
        <Error  msg="Error fetching  'em cryptos."> </Error>
        <button @click="fetch"> Try again. </button>
      </div>
      <CryptoItem v-if="status === 'FETCHED'" v-for="(crypto,index) in cryptos" 
        :name = "crypto.name"
        :key = "index"
        :price = "crypto.price_usd"
        :percentChange24h = "crypto.percent_change_24h"
        :percentChange7d = "crypto.percent_change_7d"
        :symbol = "crypto.symbol"
      ></CryptoItem>
      <Loading v-if="status === 'FETCHING'" />
    </div>
  </div>
</template>

<script>
import CryptoItem from './CryptoItem'
import Error from './Error'
import Loading from './Loading'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CryptoList',
  computed : mapGetters({
    cryptos : 'allCryptos',
    status : 'checkStatus'
  }),
  methods: {
    fetch : function(){
      this.$store.dispatch('getCryptos')
    }
  },
  created () {
    this.$store.dispatch('getCryptos')
  },
  components: {
    CryptoItem,
    Error,
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .crypto {
    width : 50%;
    margin : auto;
    margin-top : 80px;
  }

  @media screen  {
    
  }
</style>
