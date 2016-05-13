/**
 * Created by marcioheleno on 09/05/16.
 */
var mongoose = require('mongoose');

var comentarioSchema = new mongoose.Schema({
  autor : String,
  classificacao : {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  comentario : String,
  dataComent : {
    type : Date,
    default : Date.now
  }
});
var openingTimeSchema = new mongoose.Schema({
  dias : {
    type : String,
    required : true
  },
  abertura : String,
  fechamento : String,
  quandoFecha : {
    type: Boolean,
    required: true
  }
});
var locationSchema = new mongoose.Schema({
  nome : {
    type : String,
    required: true
  },
  endereco : String,
  classificacao : {
    type: Number,
    "default" : 0,
    min: 0,
    max: 5
  },
  facilidades : [String],
  coordenadas : {
    type : [Number],
    index: '2dsphere'
  },
  openingTime : [openingTimeSchema],
  comentarios: [comentarioSchema]
});

mongoose.model('Location', locationSchema);