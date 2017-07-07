#instructions to reproduce

npm start

then hit the end point

```
curl -X GET http://localhost:3000/ 

```

```
> express-status-undefined-error@1.0.0 start /Users/ghinks/dev/doodles/express-status-undefined-error
> node server.js

TypeError: Cannot read property 'toString' of undefined
    at ServerResponse.writeHead (_http_server.js:190:44)
    at ServerResponse._implicitHeader (_http_server.js:157:8)
    at ServerResponse.OutgoingMessage.end (_http_outgoing.js:548:10)
    at ServerResponse.send (/Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/response.js:211:10)
    at /Users/ghinks/dev/doodles/express-status-undefined-error/server.js:9:25
    at Layer.handle [as handle_request] (/Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/router/layer.js:95:5)
    at /Users/ghinks/dev/doodles/express-status-undefined-error/node_modules/express/lib/router/index.js:281:22
    ```
