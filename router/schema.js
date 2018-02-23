const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  _id: String,
  title: String,
  original_title: String,
  year: String,
  subtype: String,
  images: Object,
  rating: Object,
  genres: Array,
  countries: Array,
  summary: String,
  casts: Array,
  directors: Array,
  seasons_count: String,
  created_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

const Movie = module.exports = mongoose.model('Movie', movieSchema)
