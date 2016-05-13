var express = require('express');
var router = express.Router();
var home = require('../controllers/home');
var inforlocal = require('../controllers/inforlocal');
var comentario = require('../controllers/comentarios');

var about = require('../controllers/about');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// routers

// page => home
router.get('/', home.homelist);
// page => inforlocal
router.get('/inforlocal', inforlocal.locationInfo);
// page => inforlocal => comentario
router.get('/inforlocal/comentario', comentario.comentario);

// page => about
router.get('/about', about.other);

module.exports = router;
