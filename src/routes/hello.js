const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('hello', '/', async (ctx) => {
  await ctx.render('hello/index', {
    nameUrl: name => ctx.router.url('hello.name', name),
  });
});

router.get('hello.name', '/:name', async (ctx) => {
  await ctx.render('hello/name', {
    name: ctx.params.name,
  });
});

module.exports = router;
