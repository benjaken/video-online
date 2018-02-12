<template>
  <div class='mainframe'>
      <header></header>
      <div class="sider"></div>
      <div class="main">
          <a href="#" class="item" v-for="(item, index) in  movies" :key='index'>
              <div class="rating">
                {{item.rating || 0}}
              </div>
              <div class="image-cover">
                  <img :src="item.image" />
              </div>
              <p class="title" :alt="item.title">{{item.title}}</p>
              <p class="subtitle">
                  <span v-for="country in item.countries">{{country}} </span>
                  <span v-for="genre in item.genres">{{genre}} </span>
              </p>
          </a>
      </div>
  </div>
</template>

<script>
// import SimpleCall from 'vue-resource'
var apiUrl = 'https://api.douban.com'
export default {
    data () {
        return {
            movieId: ['27140017', '27192250', '27065652', '27197138', '26895171'],
            movies: []
        }
    },
    mounted () {
        this.movieId.forEach((item, i) => {
            const url = apiUrl + '/v2/movie/subject/' + item
            this.$http.jsonp(url).then((response) => {
                const data = response.data
                console.log(data)
                const arr = []
                arr.title = data.title
                arr.countries = data.countries
                arr.rating = Number(data.rating.average).toFixed(1)
                arr.image = data.images.large
                arr.genres = data.genres
                this.movies.push(arr)
            }, (response) => {
                console.log(response.data)
            })
        })
    }
}
</script>
<style>
.main {
    padding: 50px
}
.item {
    width: 200px;
    display: inline-block;
    position: relative;
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
}
.item .rating {
    background: #F6BF0D;
    padding: 3px 10px;
    border-radius: 5px;
    width: 50px;
    font-weight: bold;
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -25px;
    text-align: center;
}
.item .image-cover {
    background-size: 100%;
    height: 281px;
    overflow: hidden;
    background: #fff;
}
.item .image-cover img {
    border-width: 0;
    vertical-align: middle;
    width: 100%;
}
.item .title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 0;
}
.item .subtitle {
    color: #9FADB8;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
