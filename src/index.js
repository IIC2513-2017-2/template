const Koa = require('koa');
const routes = require('./routes');

// App constructor
const app = new Koa();

// Routing middleware
app.use(routes.routes());

module.exports = app;
