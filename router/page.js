const express = require('express')
const router = express.Router();
const notion = require('../utils/notion')

/**
 * 查询数据库
 * @param
 */
router.get('/retrieve/:pageId', async (req, res, next) => {
  try {
    const pageId = req.params.pageId
    const response = await notion.pages.retrieve({ page_id: pageId });
    res.send(response);
    // res.send('POST')
  } catch (err) {
    next(err);
  }
})

module.exports = router;