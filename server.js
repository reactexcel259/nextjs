const next = require('next')
const routes = require('./routes')
const express = require('express')
const app = next({dev: process.env.NODE_ENV !== 'production'})
// const handler = routes.getRequestHandler(app)
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    console.log(query,'req, res, route, query');
    
    app.render(req, res, route.page, query)
  })

const {createServer} = require('http')
app.prepare().then(() => {
  const server  = express()
  server.get('/hello/:name',(req, res, route, query)=>{
     app.render(req, res, '/hello',{name:req.params.name})
  })
  server.get('*',(req, res, route, query)=>{
    return handler(req, res, route, query)
  })
    console.log('ooooooo server getting started............');
    
  createServer(handler).listen(3001,err=>{
    if(err) throw err;  
    console.log('Ready on http:localhost:3001');
    
  })
})
.catch(ex=> {
  console.error(ex.stack);
  process.exit(1)
})

