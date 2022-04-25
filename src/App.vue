<template>
  <header>
    <div id="headerContents">
      <img src="@/assets/HGK_Tech_Logo-Long_Dark.png" id="headerLogo" alt="Hire a Grandkid Tech Support Logo">
      <nav>
        <div id="menuToggle">
          <input type="checkbox" id="hamburgerCheckbox" v-model="GStore.hamburgerOpen">
          <div id="overlay"></div>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          
          <ul id="menu">
            <li><router-link to="/" :class="routeName=='home'?'activeLink':''">Home</router-link></li>
            <li><router-link to="/about" :class="routeName=='about'?'activeLink':''">About</router-link></li>
            <li><router-link to="/contact" :class="routeName=='contact'?'activeLink':''">Contact</router-link></li>
            <li><router-link to="/reviews" :class="routeName=='reviews'?'activeLink':''">Reviews</router-link></li>
          </ul>
          
        </div>
      </nav>
    </div>
  </header>
  
  <main>
    <router-view/>
  </main>
</template>

<script>
  export default {
    inject: ['GStore'],
    computed: {
      routeName() {
        return this.$route.name;
      }
    }
  }
</script>

<style>
  :root {
    --main-background-color: #333333;
    --main-text-color: #e6e6e6;
    --main-accent-color: #26a66a;
  }

  body {
    background-color: var(--main-background-color);
    color: var(--main-text-color);
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  header {
    width: 100%;
    background-color: var(--main-text-color);
  }

  #headerContents {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 10px 0;
  }

  #headerLogo {
    width: 40%;
    max-width: 400px;
  }

  @media only screen and (min-width: 800px) {
    nav {
      float: right;
      margin: 3% 0;
    }

    nav #menu {
      list-style: none;
      display: flex;
    }

    #hamburgerCheckbox {
      display: none;
    }
  }
  
  @media only screen and (max-width: 799px) {
    nav {
      float: right;
      margin: 4% 0;
    }

    #menuToggle {
      display: block;
      position: relative;
      
      z-index: 1;
      
      -webkit-user-select: none;
      user-select: none;
    }

    #menuToggle #hamburgerCheckbox {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      
      cursor: pointer;
      
      opacity: 0;
      z-index: 2;
      
      -webkit-touch-callout: none;
    }

    #menuToggle .hamburger {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      
      background: var(--main-background-color);
      border-radius: 3px;
      
      z-index: 1;
      
      transform-origin: 4px 0px;
      
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }

    #menuToggle .hamburger:first-child {
      transform-origin: 0% 0%;
    }

    #menuToggle .hamburger:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    #menuToggle input:checked ~ .hamburger {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: var(--main-background-color);
    }

    #menuToggle input:checked ~ .hamburger:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    #menuToggle input:checked ~ .hamburger:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    #menu {
      position: fixed;
      width: 60vw;
      max-width: 300px;
      height: 100vh;
      right: -40px;
      margin: -100px 0 0 -50px;
      padding: 10px;
      padding-top: 125px;
      background: var(--main-text-color);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      transform-origin: 0% 0%;
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li {
      padding: 10px 0;
      font-size: 22px;
    }

    #menuToggle input:checked ~ ul {
      transform: none;
    }

    #overlay {
      position: fixed;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: var(--main-background-color);
      opacity: 0;
      left: 0;
      top: 0;
      transition: 500ms;
    }

    input:checked ~ #overlay {
      opacity: 0.75;
    }
  }

  nav ul li {
    margin: 0 15px;
    font-size: 20px;
  }

  nav ul li a {
    color: var(--main-background-color);
    text-decoration: none;
    font-weight: bold;
    transition: 200ms;
  }

  nav ul li a:hover {
    color: var(--main-accent-color);
  }

  nav ul li a.activeLink {
    color: var(--main-accent-color);
    text-decoration: underline;
  }

  #nprogress .bar {
    background: var(--main-accent-color) !important;
  }

  main {
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }
</style>
