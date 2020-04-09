<template>
    <div id="top-bar">
        <h1>{{title}}</h1>
        <input type="text">
        <button>Search</button>
    </div>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style lang="scss" scoped>
#top-bar{
    background-color:cadetblue;
    padding: 50px;
}
</style>

