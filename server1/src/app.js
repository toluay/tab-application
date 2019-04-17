console.log("helloe")
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
 app.use(morgan('combined'))
 app.use(bodyParser.json())
 app.use(cors())

 app.get('/status', (req,res)=>{
 	res.send({
 		"message": "hello woorld"
 	})
 })
  app.post('/register', (req,res)=>{
 	res.send({
 		"message": `hello ${req.body.email}! Your user was registered ! have fun !`
 	})
 })

app.listen(process.env.PORT || 8081 )




