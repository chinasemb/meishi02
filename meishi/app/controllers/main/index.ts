import { Controller, Get, Post, Ctx } from 'koa-controllers';
// import "reflect-metadata";
import { Context } from 'koa';


/* 
  * 把一个普通的类装饰成控制器类
  * 控制器的作用:  接收处理用户的请求,并控制返回对应的数据
  * 在控制器中,进行路由配置,和基本逻辑控制以及最后的输出控制
  * 在控制器中配置路由信息
  * 一个路由配置一个控制器方法
  * 当某个请求符合某个控制器的方法,绑定的路由的时候,就会执行对应的方法
*/
@Controller
export class MainIndexController {

  @Get('/')
  /**
   * 当请求是 '/' ,对应的index 函数就会执行
   * 如果一个方法是路由绑定的,那么这个方法的第一个参数就是 ctx对象
   * 想使用  ctx对象,就需要装饰器 @Ctx  :  把参数包装成koa.context对象
   */
  public async index(@Ctx ctx: Context) {
    // console.log('首页',ctx);
    // ctx.body = '首页'

    ctx.body = ctx.template.render('index.html', {
      categories: [
        {
          name: '菜谱大全',
          children: [
            {
              title: '秋葵',
              describe: '新晋VC王'
            },
            {
              title: '西红柿',
              describe: '共3160道菜谱'
            },
            {
              title: '黑木耳',
              describe: '百搭配菜，防雾霾'
            },
            {
              title: '小龙虾',
              describe: '红到勾心，辣到流泪'
            },
            {
              title: '螃蟹',
              describe: '全民爆红'
            },
            {
              title: '鸡翅',
              describe: '共1156道菜谱'
            },
            {
              title: '肉禽蛋',
              describe: '共231种'
            },
          ]
        },
        {
          name: '食材大全',
          children: [
            {
              title: '秋葵',
              describe: '新晋VC王'
            },
            {
              title: '西红柿',
              describe: '共3160道菜谱'
            },
            {
              title: '黑木耳',
              describe: '百搭配菜，防雾霾'
            },
            {
              title: '小龙虾',
              describe: '红到勾心，辣到流泪'
            },
            {
              title: '螃蟹',
              describe: '全民爆红'
            },
            {
              title: '鸡翅',
              describe: '共1156道菜谱'
            },
            {
              title: '肉禽蛋',
              describe: '共231种'
            },
          ]
        },
        {
          name: '饮食健康',
          children: [
            {
              title: '秋葵',
              describe: '新晋VC王'
            },
            {
              title: '西红柿',
              describe: '共3160道菜谱'
            },
            {
              title: '黑木耳',
              describe: '百搭配菜，防雾霾'
            },
            {
              title: '小龙虾',
              describe: '红到勾心，辣到流泪'
            },
            {
              title: '螃蟹',
              describe: '全民爆红'
            },
            {
              title: '鸡翅',
              describe: '共1156道菜谱'
            },
            {
              title: '肉禽蛋',
              describe: '共231种'
            },
          ]
        },
        {
          name: '专题专区',
          children: [
            {
              title: '秋葵',
              describe: '新晋VC王'
            },
            {
              title: '西红柿',
              describe: '共3160道菜谱'
            },
            {
              title: '黑木耳',
              describe: '百搭配菜，防雾霾'
            },
            {
              title: '小龙虾',
              describe: '红到勾心，辣到流泪'
            },
            {
              title: '螃蟹',
              describe: '全民爆红'
            },
            {
              title: '鸡翅',
              describe: '共1156道菜谱'
            },
            {
              title: '肉禽蛋',
              describe: '共231种'
            },
          ]
        },
      ]
    })
  }
  @Get('/user')
  /**
   * 当请求是 '/user' ,对应的user 函数就会执行
   */
  public async user() {
    console.log('用户');

  }


}