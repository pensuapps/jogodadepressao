<template>
  <v-app class="background-purple">
    <v-app-bar
      app
      v-if="$router.currentRoute.name != 'home'"
      flat
      dense
      color="#5F88B4"
    >
      <v-icon dark @click="goHome">mdi-arrow-left</v-icon>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.background-purple {
  background: radial-gradient(circle, #6b23d9, #521ba6) !important;
  background: #5f88b4 !important;
  background-repeat: no-repeat !important;
  -webkit-font-smoothing: antialiased !important;
  color: white !important;
}
</style>
