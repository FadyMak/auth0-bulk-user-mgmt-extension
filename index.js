var express  = require('express')
var auth0    = require('auth0-oauth2-express')
var Webtask  = require('webtask-tools')
var app      = express()
var template = require('./index.ejs')

app.use(auth0({
  scopes: 'read:users read:user_idp_tokens delete:users'
}))

app.get('/', function (req, res) {
  res.header("Content-Type", 'text/html')
  res.status(200).send(template())
})

module.exports = app
