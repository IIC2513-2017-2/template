const Koa = require('koa');
const koaLogger = require('koa-logger');
const routes = require('./routes');

// App constructor
const app = new Koa();

// Routing middleware
app.use(koaLogger());
app.use(routes.routes());

module.exports = app;
