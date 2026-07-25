// Module ID: 13315
// Function ID: 102149
// Name: check
// Dependencies: [13294]

// Module 13315 (check)
const tmp = require("check").navigator && require("check").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
