// Module ID: 13498
// Function ID: 13499
// Dependencies: [13477]

// Module 13498
const tmp = require("module_13477").navigator && require("module_13477").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
