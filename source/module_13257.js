// Module ID: 13257
// Function ID: 101707
// Dependencies: [13248, 13258, 13256, 13259]

// Module 13257

export default require("module_13248") ? ((arg0) => "symbol" === typeof arg0) : ((arg0) => {
  const tmp = require(13258) /* all */("Symbol");
  let tmp5Result = require(13256) /* all */(tmp);
  if (tmp5Result) {
    tmp5Result = require(13259) /* call */(tmp.prototype, Object(arg0));
    const tmp5 = require(13259) /* call */;
  }
  return tmp5Result;
});
