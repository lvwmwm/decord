// Module ID: 13470
// Function ID: 13471
// Dependencies: [13449]

// Module 13470
const tmp = require("module_13449").navigator && require("module_13449").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
