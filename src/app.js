const Koa = require('koa');
const session = require('koa-session');
const koaLogger = require('koa-logger');
const path = require('path');
const koaBody = require('koa-body');
const render = require('koa-ejs');
const routes = require('./routes');
const orm = require('./models');

// App constructor
const app = new Koa();

const developmentMode = app.env === 'development';

app.keys = [
  'these secret keys are used to sign HTTP cookies',
  'to make sure only this app can generate a valid one',
  'and thus preventing someone just writing a cookie',
  'saying he is logged in when it\'s really not',
];

// expose ORM through context's prototype
app.context.orm = orm;

/**
 * Middlewares
 */

// log requests
app.use(koaLogger());

// expose a session hash to store information across requests from same client
app.use(session({
  maxAge: 14 * 24 * 60 * 60 * 1000, // 2 weeks
}, app));

// parse request body
app.use(koaBody({
  multipart: true,
  keepExtensions: true,
}));

// Configure EJS views
render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'html.ejs',
  cache: !developmentMode,
});

// Routing middleware
app.use(routes.routes());

module.exports = app;
