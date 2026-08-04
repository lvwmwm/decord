// Module ID: 13504
// Function ID: 13505
// Dependencies: [13495, 13505, 13503, 13506]

// Module 13504

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13505) /* all */("Symbol");
  let tmpResultResult = require(13503) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13506) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13506) /* call */;
  }
  return tmpResultResult;
});
