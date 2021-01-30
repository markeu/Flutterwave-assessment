const express = require('express');
const { fetchData, createData } = require('../controller');

const router = express.Router();

router.get('/', fetchData);
router.post('/validate-rule', createData);

module.exports = router;