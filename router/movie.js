const express = require('express')
const router = express.Router()
const Movie = require('./schema')

// 查询所有电影
router.get('/movie', (req, res) => {
  Movie.find({})
       .sort({update_at: -1})
       .then(movies => {
         res.json(movies)
       })
       .catch(err => {
         res.json(err)
       })
})
// 通过MovieId查询单个电影
router.get('/movie/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.json(movie)
  })
  .catch(err => {
    res.json(err)
  })
})
// 查询某种类电影
router.post('/movie', (req, res) => {
  const options = {}
  if (req.body.country) options.countries = new RegExp(req.body.country, 'i')
  if (req.body.subtype) options.subtype = req.body.subtype
  Movie.find(options).sort({update_at: -1}).then(movies => {
    res.json(movies)
  }).catch(err => {
    res.json(err)
  })
})
// 添加一部电影
router.post('/updateMovie', (req, res) => {
  Movie.create(req.body, (err, movie) => {
    if (err) {
      res.json(err)
    } else {
      res.json(movie)
    }
  })
})
// 更新一部电影
router.put('/updateMovie/:id', (req, res) => {
  Movie.findOneAndUpdate({
    _id: req.params.id}, {
    $set: {
      title: req.body.title,
      rating: req.body.rating,
      poster: req.body.poster,
      introduction: req.body.introduction
    }
  }, {new: true})
  .then(movie => res.json(movie))
  .catch(err => res.json(err))
})
// 删除一部电影
router.delete('/deleteMovie/:id', (req, res) => {
  Movie.findOneAndRemove({_id: req.params.id})
       .then(movie => res.send(`${movie.title}删除成功`))
       .catch(err => res.json(err))
})

module.exports = router
