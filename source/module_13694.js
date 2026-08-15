// Module ID: 13694
// Function ID: 13695
// Dependencies: [13673]

// Module 13694
const tmp = require("module_13673").navigator && require("module_13673").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
