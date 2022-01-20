const express = require('express')
const router = express.Router();
const notion = require('../utils/notion')

// 博客数据库ID
const databaseId = 'd2292310fb8343c3b48027e710df16f2';

/**
 * 查询数据库
 * @param
 */
router.post('/query', async (req, res, next) => {
  try {
    console.log('/api/database/query');
    // 安装body-parser获得JSON数据
    // console.log(req.body);
    const filter = req.body.filter
    // console.log(typeof filter);
    const sorts = req.body.sorts
    // console.log(typeof sorts);
    const start_cursor = req.body.start_cursor
    const page_size = req.body.page_size
    // console.log(page_size);
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: filter || {
        "property": "Published",
        "checkbox": {
          "equals": true
        }
      },
      sorts: sorts || [{
        "property": "Published time",
        "direction": "descending"
      }],
      start_cursor,
      page_size,
    });
    res.send(response);
    // res.send('POST')
  } catch (err) {
    next(err);
  }
})

module.exports = router;