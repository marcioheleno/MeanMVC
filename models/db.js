/**
 * Created by marcioheleno on 09/05/16.
 */
// primeiro passo
var mongoose = require('mongoose');
var graceFullShutdown;
var dbURI = 'mongodb://localhost/loc8r';
  if (process.env.NODE_ENV === 'production') {
    // dbURI = 'mongodb://marcio:MAR120881@ds021182.mlab.com:21182/heroku_rgrpt31g';
   // lembrando que para isso acontercer tem que se lançado no terminal.
   // $ NODE_ENV=production MONGOLAB_URI=mongodb://<username>:<password>@<hostname>:<port>/<database> nodemon start
   dbURI = process.env.MONGOLAB_URI;
  }
mongoose.connect(dbURI);

// var dbURIlog = 'mongodb://localhost/loc8rLog';
// var logDB = mongoose.createConnection(dbURIlog);

mongoose.connection.on('connected', function () {
  console.log('Mongoose esta conectado' + dbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose esta conectado' + err);
});
mongoose.connection.on('disconectado', function () {
  console.log('Mongoose esta disconectado');
});
// //LogDB
// logDB.on('connected', function () {
//   console.log('Mongoode esta conectado com ' + dbURIlog);
// });
// logDB.close(function () {
//   console.log('Mongoose log disconectado');
// });

var graceFullShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose esta disconectado ' + msg);
    callback();
  });
};

// Reiniciado pelo nodemon
process.once('SIGUSR2', function () {
  graceFullShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// Reiniciado pelo Terminal
process.on('SIGINT', function () {
  graceFullShutdown('app termination', function () {
    process.exit(0);
  });
});
// Reiniciado pelo Heroku
process.on('SIGTERM', function () {
  graceFullShutdown('Heroku app shutdown', function () {
    process_params.exit(0);
  });
});

require('./locationsDb');