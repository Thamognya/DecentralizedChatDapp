const express = require('express')
const Gun = require('gun');
const app = express()
const port = 3005
const hostname = '192.168.1.122'
app.use(Gun.serve);

const server = app.listen(port, hostname)

Gun({ web: server })
