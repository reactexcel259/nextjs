const nextRoutes = require('next-routes')

const routes = (module.exports = nextRoutes())
routes.add("demo", "/demo/:id/:path*")
routes.add('hello','/hello/:name/:path*') 
routes.add("post/crater", "/post/crater/:id/:path*")
routes.add("details", "/details/:id/:path*")

