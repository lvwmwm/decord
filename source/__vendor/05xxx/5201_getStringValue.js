// Module ID: 5201
// Function ID: 5202
// Name: getStringValue
// Dependencies: [5199]

// Module 5201 (getStringValue)
import getStringValue from "getStringValue" /* 5199 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return getStringValue.getStringValue(value);
  }
};
arg5.default = obj;
