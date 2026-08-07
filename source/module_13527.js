// Module ID: 13527
// Function ID: 13528
// Dependencies: [13518, 13528, 13526, 13529]

// Module 13527

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13528) /* all */("Symbol");
  let tmpResultResult = require(13526) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13529) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13529) /* call */;
  }
  return tmpResultResult;
});
