// Module ID: 13601
// Function ID: 13602
// Dependencies: [13580]

// Module 13601
const tmp = require("module_13580").navigator && require("module_13580").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
