// Module ID: 13304
// Function ID: 102022
// Name: check
// Dependencies: [13283]

// Module 13304 (check)
const tmp = require("check").navigator && require("check").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
