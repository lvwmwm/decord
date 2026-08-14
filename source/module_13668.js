// Module ID: 13668
// Function ID: 13669
// Dependencies: [13659, 13669, 13667, 13670]

// Module 13668

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13669) /* all */("Symbol");
  let tmpResultResult = require(13667) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13670) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13670) /* call */;
  }
  return tmpResultResult;
});
