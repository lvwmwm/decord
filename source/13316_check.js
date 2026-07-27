// Module ID: 13316
// Function ID: 102154
// Name: check
// Dependencies: [13295]

// Module 13316 (check)
const tmp = require("check").navigator && require("check").navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
