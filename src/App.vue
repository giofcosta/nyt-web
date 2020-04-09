<template>
  <div id="app">
    <TopBar title="The NYT News" :onSearch="search" />
    <NewsSection title="Featured News" :items="featuredNews" />
    <NewsSection title="Latest News" :items="latestNews" />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import NewsSection from "./components/NewsSection";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TopBar,
    NewsSection
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters("archive", ["featuredNews", "latestNews"])
  },
  methods: {
    ...mapActions("archive", ["getArchive"]),
    getData() {
      this.getArchive({ year: 2020, month: 4 });
    },
    search(term){
      console.log(term)
      this.$store.dispatch('archive/addSearch', {term})
    }
  }
};
</script>

<style lang="scss">
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
