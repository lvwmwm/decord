// Module ID: 13366
// Function ID: 102339
// Dependencies: [13357, 13367, 13365, 13368]

// Module 13366

export default require("module_13357") ? ((arg0) => "symbol" === typeof arg0) : ((arg0) => {
  const tmp = require(13367) /* all */("Symbol");
  let tmp5Result = require(13365) /* all */(tmp);
  if (tmp5Result) {
    tmp5Result = require(13368) /* call */(tmp.prototype, Object(arg0));
    const tmp5 = require(13368) /* call */;
  }
  return tmp5Result;
});
