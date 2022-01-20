require('dotenv').config()
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = 'd2292310fb8343c3b48027e710df16f2';
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response);
})();