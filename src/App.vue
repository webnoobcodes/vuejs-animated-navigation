<template>
  <div id="app">
    <TheNavigation />
    <!--
      NODE:
      It's important to know that the router-view component here always renders the current route from your application. And that means in detail the component, which you have set in your router configuration. In this case, the article component. 

      And this component is in this constellation also the child component at this time. And that's why we can use slots, and any other stuff we can do with a regular child component. 

      @click.native
      In this case, regular events are not working, because Vue listen only to custom events by default, which you can fire in the child component with $emit. And if you write here click, Vue looks to an emitted click event from the child component. 

      So if you want to listen for a native DOM event on the root element, in this case, you need the native modifier.
    -->
    <router-view :class="{'shrink':showNav}" @click.native="showNav = false">
      <div id="navigation-icon">
        <!--
          By nested click events you need the stop modifer for avoiding the event propagation.
        -->
        <i class="fas fa-bars" @click.stop="showNav = true"></i>
      </div>
    </router-view>
  </div>
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue'

  export default {
    name: 'App',
    data: () => {
      return {
        showNav: false
      }
    },
    components: {
      TheNavigation
    },
    watch: {
      $route() {
        this.showNav = false;      
      },
    }
  }
</script>

<style lang="scss">
  @import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #03754f;
    width: 100vw;
    overflow-x: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;    
  }

  #navigation-icon > i {
    cursor: pointer;
    font-size: 2rem;
    padding: 4px;
  }

  .shrink {
    transform: scale(.9) translateX(250px);
    border-radius: 20px;    
    height: 100vh;
    overflow: hidden;
    box-shadow: -5px 5px 20px #333;
    cursor: pointer;
  }
</style>
