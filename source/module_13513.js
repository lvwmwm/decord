// Module ID: 13513
// Function ID: 13514
// Dependencies: [13504, 13514, 13512, 13515]

// Module 13513

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13514) /* all */("Symbol");
  let tmpResultResult = require(13512) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13515) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13515) /* call */;
  }
  return tmpResultResult;
});
