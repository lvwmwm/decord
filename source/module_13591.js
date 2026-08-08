// Module ID: 13591
// Function ID: 13592
// Dependencies: [13570]

// Module 13591
const tmp = require("module_13570").navigator && require("module_13570").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
