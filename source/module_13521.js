// Module ID: 13521
// Function ID: 13522
// Dependencies: [13500]

// Module 13521
const tmp = require("module_13500").navigator && require("module_13500").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
