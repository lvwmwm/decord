// Module ID: 13383
// Function ID: 13384
// Dependencies: [13362]

// Module 13383
const tmp = require("module_13362").navigator && require("module_13362").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
