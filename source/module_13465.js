// Module ID: 13465
// Function ID: 13466
// Dependencies: [13444]

// Module 13465
const tmp = require("module_13444").navigator && require("module_13444").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
