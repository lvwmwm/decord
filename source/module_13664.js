// Module ID: 13664
// Function ID: 13665
// Dependencies: [13655, 13665, 13663, 13666]

// Module 13664

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13665) /* all */("Symbol");
  let tmpResultResult = require(13663) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13666) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13666) /* call */;
  }
  return tmpResultResult;
});
