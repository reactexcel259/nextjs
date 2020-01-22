const routes = require('next-routes')

module.exports = routes() 
.add("demo", "/demo/:id/:path*")
.add('hello') 
.add("post/crater", "/post/crater/:id/:path*")

