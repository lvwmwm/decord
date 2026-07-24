// Module ID: 13310
// Function ID: 102034
// Dependencies: [13301, 13311, 13309, 13312]

// Module 13310

export default require("module_13301") ? ((arg0) => "symbol" === typeof arg0) : ((arg0) => {
  const tmp = require(13311) /* all */("Symbol");
  let tmp5Result = require(13309) /* all */(tmp);
  if (tmp5Result) {
    tmp5Result = require(13312) /* call */(tmp.prototype, Object(arg0));
    const tmp5 = require(13312) /* call */;
  }
  return tmp5Result;
});
