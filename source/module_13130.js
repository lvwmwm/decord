// Module ID: 13130
// Function ID: 99506
// Dependencies: []

// Module 13130
const tmp = require(dependencyMap[0]).navigator && require(dependencyMap[0]).navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
