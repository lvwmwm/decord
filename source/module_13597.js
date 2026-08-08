// Module ID: 13597
// Function ID: 13598
// Dependencies: [13588, 13598, 13596, 13599]

// Module 13597

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13598) /* all */("Symbol");
  let tmpResultResult = require(13596) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13599) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13599) /* call */;
  }
  return tmpResultResult;
});
