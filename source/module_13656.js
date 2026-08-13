// Module ID: 13656
// Function ID: 13657
// Dependencies: [13647, 13657, 13655, 13658]

// Module 13656

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13657) /* all */("Symbol");
  let tmpResultResult = require(13655) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13658) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13658) /* call */;
  }
  return tmpResultResult;
});
