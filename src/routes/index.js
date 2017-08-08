const KoaRouter = require('koa-router');

const hello = require('./hello');

const router = new KoaRouter();

// TODO remove this?
router.use(async (ctx, next) => {
  console.log('Headers', ctx.headers); // eslint-disable-line
  console.log('Params', ctx.params); // eslint-disable-line
  await next();
});

router.get('/', (ctx) => {
  ctx.body = {
    message: 'Hello world',
  };
});

router.post('/', (ctx) => {
  ctx.body = {
    message: 'What u doing?',
  };
});

router.use('/hello', hello.routes());

module.exports = router;
