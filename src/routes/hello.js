const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('hello', '/', (ctx) => {
  ctx.type = 'html';
  ctx.body = `Hello… <a href="${router.url('hello.name', 'your-name-here')}">your-name-here</a>.`;
});

router.get('hello.name', '/:name', (ctx) => {
  ctx.body = {
    message: `Hello ${ctx.params.name}!`,
  };
});

module.exports = router;
