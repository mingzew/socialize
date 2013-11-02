module.exports = function(app, express) {

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  // production only
  if ('production' == app.get('env')) {
    app.use(express.errorHandler());
  }
}
