// Module ID: 13700
// Function ID: 13701
// Dependencies: [13691, 13701, 13699, 13702]

// Module 13700

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13701) /* all */("Symbol");
  let tmpResultResult = require(13699) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13702) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13702) /* call */;
  }
  return tmpResultResult;
});
