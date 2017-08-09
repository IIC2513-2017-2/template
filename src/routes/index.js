const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', (ctx) => {
  ctx.body = `<h1>Hello world. App web version ${pkg.version}</h1>`;
});

module.exports = router;
