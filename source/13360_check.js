// Module ID: 13360
// Function ID: 102327
// Name: check
// Dependencies: [13339]

// Module 13360 (check)
const tmp = require("check").navigator && require("check").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
