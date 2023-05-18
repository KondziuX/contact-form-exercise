<template>
  <v-app id="app">
    <v-container style="max-width: 500px">
      <div id="logo">
        <img alt="Vue logo" src="./assets/logo.jpg" width="50%" />
      </div>
      <ContactForm msg="Hello Vue in CodeSandbox!" />
    </v-container>
  </v-app>
</template>

<script>
import ContactForm from "./components/ContactForm";

export default {
  name: "App",
  components: {
    ContactForm,
  },
};
</script>

<style>
#logo {
  text-align: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
