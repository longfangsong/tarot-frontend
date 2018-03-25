<template>
  <div id="app">
    <div id="container">
      <h1>TAROT</h1>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*background-image: url("../static/images/background-all.png"), radial-gradient(#1d001d, #3e003e);*/
    background-image: radial-gradient(#1f0633, #2e0011);
    background-size: contain, contain;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }

  #container {
    position: relative;
    margin: 25px;
    background: hsla(0, 0%, 100%, 0.3);
    border-radius: 12px;
    max-width: 800px;
    max-height: 600px;
    width: 100vw;
    height: 100vh;
    box-shadow: 0 0 5px rgb(0, 0, 0);
    z-index: 1;
    overflow: hidden;
  }

  #container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    /*background-image: url("../static/images/background-all.png"), radial-gradient(#1d001d, #3e003e);*/
    background-image: radial-gradient(#1f0633, #2e0011);
    background-size: contain, contain;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(10px);
    margin: -30px;
  }

  @font-face {
    font-family: "EnglishTowne";
    src: url("../static/fonts/EnglishTowne.ttf");
  }

  h1 {
    font-family: "EnglishTowne", fantasy;
    font-size: 50pt;
    position: relative;
    left: 10px;
    top: -50px;
    text-shadow: -5px -5px 10px #343434;
    color: #dcc6c6;
    font-weight: normal;
  }

  h1::first-letter {
    font-size: 100pt;
  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-active {
    transition: 0.5s;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-leave {
    opacity: 1;
  }

  .v-leave-to {
    opacity: 0;
  }

  .v-leave-active {
    transition: 0.5s;
  }
</style>
