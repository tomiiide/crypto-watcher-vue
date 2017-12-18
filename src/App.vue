<template>
  <div id="app">
    <Header />
    <CryptoList/>
    <Footer />
  </div>
</template>

<script>
import CryptoList from './components/CryptoList'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    CryptoList,
    Header,
    Footer
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

button{
  padding : 10px;
  background-color :rgb(0, 68, 255);
  color : white;
  border-style: unset;
  border-radius : 4px;
  cursor: pointer;
  font-family: 'Nunito';
  font-size: 18px;
}
</style>
