// tslint:disable:no-console
import * as Koa from 'koa'
const app = new Koa()

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// response

app.use(async ctx => {
  ctx.body = {data:"data1",message:"suksess"}
})

app.listen(3000)
