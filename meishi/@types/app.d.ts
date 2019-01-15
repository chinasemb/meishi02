import * as Koa from 'koa';
import * as nunjucks from 'nunjucks';

declare module 'koa' {
  interface Context {
    template: nunjucks.Environment
  }
}