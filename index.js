const koala = require('koala');
const app = koala();

app.use(async (ctx, next) => {
  ctx.status = 204;
  ctx.body = 'Hello Koala';
});

app.listen(3000);
