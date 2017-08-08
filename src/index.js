const Koa = require('koa');

// App constructor
const app = new Koa();

// Routing middleware
const routes = require('./routes');
app.use(routes.routes());

module.exports = app;
