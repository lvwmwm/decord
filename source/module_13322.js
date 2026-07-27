// Module ID: 13322
// Function ID: 102166
// Dependencies: [13313, 13323, 13321, 13324]

// Module 13322

export default require("module_13313") ? ((arg0) => "symbol" === typeof arg0) : ((arg0) => {
  const tmp = require(13323) /* all */("Symbol");
  let tmp5Result = require(13321) /* all */(tmp);
  if (tmp5Result) {
    tmp5Result = require(13324) /* call */(tmp.prototype, Object(arg0));
    const tmp5 = require(13324) /* call */;
  }
  return tmp5Result;
});
