
var compression = require('compression'),
    PORT = process.env.PORT || 8888,
    koaBunyanLogger = require('koa-bunyan-logger'),
    router = require('koa-router')();
    app = module.exports = require('koa')();


//Init logger
app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.timeContext());

//Init logging headers
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  this.log.info('%s %s for %s; duration: %sms', this.request.method, this.request.ip, this.path, ms);
});

//Set cache headers
app.use(function *(next) {
  this.set('Expires', 'Fri, 01 Jan 1990 00:00:00 GMT');
  this.set('Cache-Control', 'no-store, ' + 'no-cache, must-revalidate, max-age=0');
  this.set('Pragma', 'no-cache');
  yield next;
});


app.use(function *(next) {
   compression();
   yield next;
});

router.get('/favicon.ico', function *(next) {
  this.body = '';
  yield next;
});

router.get('/_health', require('./lib/resources/health'));

app
  .use(router.routes());

if (!module.parent) {
  app.listen(PORT, function () {
    console.log('on :%s', PORT);
  });
}
