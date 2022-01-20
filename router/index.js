const express = require("express");
const router = express.Router();

// 数据库相关路由
router.use('/database', require('./database'))
router.use('/page', require('./page'))

module.exports = router;