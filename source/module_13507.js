// Module ID: 13507
// Function ID: 13508
// Dependencies: [13486]

// Module 13507
const tmp = require("module_13486").navigator && require("module_13486").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
