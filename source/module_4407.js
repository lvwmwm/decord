// Module ID: 4407
// Function ID: 38789
// Dependencies: []

// Module 4407
const tmp = require(dependencyMap[0])("%Array%");
let tmp2 = !tmp.isArray;
if (tmp2) {
  tmp2 = require(dependencyMap[1])("Object.prototype.toString");
}

export default tmp.isArray || function IsArray(arg0) {
  return "[object Array]" === tmp2(arg0);
};
