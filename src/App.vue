<template>
  <div id="app">
    <TopBar title="The NYT News" />
    <div v-for="article in featuredNews" :key="article._id">{{article._id}}</div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TopBar
  },
  created() {
    this.getData();
  },
  computed: {
    //...mapState(),
    ...mapGetters("archive", ["featuredNews", "latestNews"])
  },
  methods: {
    ...mapActions("archive", ["getArchive"]),
    getData() {
      this.getArchive({year: 2020, month: 4});
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
