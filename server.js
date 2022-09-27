// import express and third partmodules
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import session from 'express-session'

//ES modules fic for __dirname
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

//import router

import indexRouter from './app/routes/index.route.server.js'

//instance app-server
const app = express()

//set up viewENgine
app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))
app.use(
  session({
    secret: 'My secret',
    saveUninitialized: false,
    resave: false,
  })
)

//add routes

app.use('/', indexRouter)

//run app
app.listen(3000)

console.log('Server runnning at http://localhost:3000')
