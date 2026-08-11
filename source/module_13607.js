// Module ID: 13607
// Function ID: 13608
// Dependencies: [13598, 13608, 13606, 13609]

// Module 13607

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13608) /* all */("Symbol");
  let tmpResultResult = require(13606) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13609) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13609) /* call */;
  }
  return tmpResultResult;
});
