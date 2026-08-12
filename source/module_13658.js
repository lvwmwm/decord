// Module ID: 13658
// Function ID: 13659
// Dependencies: [13637]

// Module 13658
const tmp = require("module_13637").navigator && require("module_13637").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
