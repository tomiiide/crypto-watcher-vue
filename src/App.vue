<template>
  <div id="app">
    <Header />
    <CryptoList/>
  </div>
</template>

<script>
import CryptoList from './components/CryptoList'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    CryptoList,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
