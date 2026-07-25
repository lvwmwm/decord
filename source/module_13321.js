// Module ID: 13321
// Function ID: 102161
// Dependencies: [13312, 13322, 13320, 13323]

// Module 13321

export default require("module_13312") ? ((arg0) => "symbol" === typeof arg0) : ((arg0) => {
  const tmp = require(13322) /* all */("Symbol");
  let tmp5Result = require(13320) /* all */(tmp);
  if (tmp5Result) {
    tmp5Result = require(13323) /* call */(tmp.prototype, Object(arg0));
    const tmp5 = require(13323) /* call */;
  }
  return tmp5Result;
});
