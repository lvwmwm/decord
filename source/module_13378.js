// Module ID: 13378
// Function ID: 13379
// Dependencies: [13357]

// Module 13378
const tmp = require("module_13357").navigator && require("module_13357").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
