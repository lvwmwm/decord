// Module ID: 13659
// Function ID: 13660
// Dependencies: [13638]

// Module 13659
const tmp = require("module_13638").navigator && require("module_13638").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
