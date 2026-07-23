// Module ID: 13251
// Function ID: 101695
// Name: check
// Dependencies: [13230]

// Module 13251 (check)
const tmp = require("check").navigator && require("check").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
