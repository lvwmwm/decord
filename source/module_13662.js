// Module ID: 13662
// Function ID: 13663
// Dependencies: [13641]

// Module 13662
const tmp = require("module_13641").navigator && require("module_13641").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
