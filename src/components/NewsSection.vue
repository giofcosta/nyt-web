<template>
  <section id="news-section">
    <h1>{{title}}</h1>
    <div class="news-info" v-for="(article, idx) in pageOfItems" :key="idx">
      <a :href="article.web_url">
        <img :src="getImage(article)" alt />
        <div class="news-text">
          <h3>{{article.abstract}}</h3>
          <span>{{article.lead_paragraph}}</span>
        </div>
      </a>
    </div>

    <div class="news-pagination">
      <jw-pagination :items="items" @changePage="onChangePage"></jw-pagination>
    </div>
  </section>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  props: ["title", "items"],
  data() {
    return {
      pageOfItems: [],
      searchTerm: "Iran"
    };
  },
  components: {
    JwPagination
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    getImage(article) {
      if (article && article.multimedia && article.multimedia.length > 0) {
        console.log(article.multimedia[0].url);
        return "https://www.nytimes.com/" + article.multimedia[0].url;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#news-section {
  margin: 0 auto;
  text-align: left;
  max-width: 1280px;

  .news-info {
    min-height: 135px;
    padding: 10px;
  }

  .news-text {
      margin-left: 230px;;
  }

  img {
    width: 200px;
    float: left;
  }

  h3 {
    margin: 0;
  }

  a {
    color: #444444;
    text-decoration: none;
  }

  .news-pagination {
    text-align: center;
    margin: 30px 0;
    background-color: lightblue;
    padding: 10px 0;

  }
}
</style>