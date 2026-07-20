// Module ID: 13121
// Function ID: 99461
// Dependencies: []

// Module 13121
const tmp = require(dependencyMap[0]).navigator && require(dependencyMap[0]).navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
