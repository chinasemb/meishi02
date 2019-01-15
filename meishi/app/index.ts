import * as Koa from 'koa';
import { useControllers } from 'koa-controllers';
import * as Nunjucks from 'nunjucks';
import * as KoaStaticCache from 'koa-static-cache';

const app = new Koa();

app.use(KoaStaticCache('./static', {
  gzip: true,
  prefix: '/public'
}))

app.use(async (ctx, next) => {
  /* 
    *  在ctx对象下挂载一个 template属性,用于 存放模版引擎
    * 创建模版引擎实例对象
    * Nunjucks.Environment
  */
  ctx.template = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(__dirname + '/../views/')
  )

  //  ctx.template.render()

  await next()
})

useControllers(
  app,
  __dirname + '/controllers/**/*.js',
  {
    multipart: {
      dest: './ uploads',
      storage: 2,
      limits: {
        fileSize: 3000,
        files: 300
      }
    }
  }
);

app.listen(7777);