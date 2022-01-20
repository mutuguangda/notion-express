require('dotenv').config()
const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT || 3000
const router = require("./router");

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// 挂载路由
app.use("/api", router);

app.get('/', function(req, res) {
  res.send('/')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
