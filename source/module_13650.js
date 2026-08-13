// Module ID: 13650
// Function ID: 13651
// Dependencies: [13629]

// Module 13650
const tmp = require("module_13629").navigator && require("module_13629").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
