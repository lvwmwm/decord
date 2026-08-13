// Module ID: 13665
// Function ID: 13666
// Dependencies: [13656, 13666, 13664, 13667]

// Module 13665

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13666) /* all */("Symbol");
  let tmpResultResult = require(13664) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13667) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13667) /* call */;
  }
  return tmpResultResult;
});
