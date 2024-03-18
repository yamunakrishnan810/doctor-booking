

// 1 import json-server

const jsonServer = require('json-server')

// 2 create a server application using jsonserver

const  drServer = jsonServer.create()

// 3 Setup path for db.json

const router = jsonServer.router('db.json')

// 4 return middleware 

const middleware = jsonServer.defaults()

// 5 setup a port number 

const port = 3001 ;

// 6 use in restserver

drServer.use(middleware);
drServer.use(router)

// 7 run the server

drServer.listen(port,()=>{

    console.log(" doctor server listening on the port " + port);
})

