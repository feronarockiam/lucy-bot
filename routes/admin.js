const routes = require('express').Router();
const admin = require('../controllers/admin')

routes.use('/admin',admin)

module.exports = routes;