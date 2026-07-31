// Module ID: 13402
// Function ID: 13403
// Dependencies: [13381]

// Module 13402
const tmp = require("module_13381").navigator && require("module_13381").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
