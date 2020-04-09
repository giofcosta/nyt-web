<template>
  <div id="top-bar">
    <h1>{{title}}</h1>
    <input type="text" v-model="searchTerm" />
    <button @click="onSearch(searchTerm)">Search</button>
  </div>
</template>

<script>
export default {
  props: ["title", "onSearch"],
  data() {
    return {
      searchTerm: ""
    };
  },

};
</script>

<style lang="scss" scoped>
#top-bar {
  background-color: cadetblue;
  padding: 50px;
}
</style>

