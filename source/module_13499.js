// Module ID: 13499
// Function ID: 13500
// Dependencies: [13478]

// Module 13499
const tmp = require("module_13478").navigator && require("module_13478").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
