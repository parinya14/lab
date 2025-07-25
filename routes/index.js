const express = require('express')
const router = express.Router()
router.get('/', function(req, res, next) {
res.locals.pageData = {
title:'Parinya Luenam'
}
res.render('pages/index')
})
module.exports = router
