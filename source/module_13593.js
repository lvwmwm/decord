// Module ID: 13593
// Function ID: 13594
// Dependencies: [13572]

// Module 13593
const tmp = require("module_13572").navigator && require("module_13572").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
