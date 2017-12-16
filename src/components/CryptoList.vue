<template>
  <div class="crypto">
    <div class="header">CryptoWatcher</div>
    <div class="cryto_list">
      <CryptoItem v-for="(crypto,index) in cryptos" 
        :name = "crypto.name"
        :key = "index"
      ></CryptoItem>
    </div>
  </div>
</template>

<script>
import CryptoItem from './CryptoItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CryptoList',
  computed : mapGetters({
    cryptos : 'allCryptos'
  }),
  created () {
    this.$store.dispatch('getCryptos')
  },
  components: {
    CryptoItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
