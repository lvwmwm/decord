// Module ID: 13137
// Function ID: 99539
// Dependencies: []

// Module 13137
const tmp = require(dependencyMap[0]).navigator && require(dependencyMap[0]).navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
