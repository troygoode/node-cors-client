const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(`${__dirname}/public`));

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
  });
}
