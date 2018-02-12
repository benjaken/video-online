<template>
  <video id="my-video" ref="video" class="video-js" controls preload="auto" :poster="poster" data-setup="{}">
    <source src="../videos/电影少女～VIDEO GIRL AI 2018～.Denei.Shoujo.Video.Girl.Ai.2018.Ep01.Chi_Jap.HDTVrip.1280X720-ZhuixinFan.mp4" type='video/mp4'>
  </video>
</template>

<script>
import _videojs from 'video.js'
const videojs = window.videojs || _videojs

export default {
  name: 'HelloWorld',
  data () {
    return {
      poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509909285.webp'
    }
  },
  mounted () {
    var options = {
      autoplay: false,
      language: 'zh-Hans-CN',
      playbackRates: [0.5, 1, 1.5, 2]
    }
    var player = videojs('my-video', options, function onPlayerReady () {
      videojs.log('Your player is ready!')
      // In this context, `this` is the player that was created by Video.js.
      // this.play()
      // How about an event listener?
      this.on('ended', function () {
        videojs.log('Awww...over so soon?!')
      })
    })
    player.ready(function () {
      this.addClass('my-example')
    })
  }
}
</script>
<style>
.my-video-dimensions {
  width: 100%;
  height: 100%;
}
</style>
