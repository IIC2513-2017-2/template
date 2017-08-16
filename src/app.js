const Koa = require('koa');
const koaLogger = require('koa-logger');
const path = require('path');
const render = require('koa-ejs');
const routes = require('./routes');

// App constructor
const app = new Koa();

const developmentMode = app.env === 'development';

// Configure EJS views
render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'html.ejs',
  cache: !developmentMode,
});

// Routing middleware
app.use(koaLogger());
app.use(routes.routes());

module.exports = app;
