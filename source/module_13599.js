// Module ID: 13599
// Function ID: 13600
// Dependencies: [13590, 13600, 13598, 13601]

// Module 13599

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13600) /* all */("Symbol");
  let tmpResultResult = require(13598) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13601) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13601) /* call */;
  }
  return tmpResultResult;
});
