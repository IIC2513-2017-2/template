const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

// router.use(async (ctx, next) => {
//   console.log('Headers', ctx.headers);
//   console.log('Params', ctx.params);
//   await next();
// });

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

app.use(router.routes());

const PORT = process.env.PORT || 3000;

app.listen(PORT);
