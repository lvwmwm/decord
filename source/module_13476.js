// Module ID: 13476
// Function ID: 13477
// Dependencies: [13467, 13477, 13475, 13478]

// Module 13476

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = require(13477) /* all */("Symbol");
  let tmpResultResult = require(13475) /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = require(13478) /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = require(13478) /* call */;
  }
  return tmpResultResult;
});
