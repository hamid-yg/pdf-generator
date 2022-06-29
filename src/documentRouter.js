const express = require('express')
const router = express.Router();

const docController = require('./documentController')

router.post('/document', docController.document)

module.exports = router