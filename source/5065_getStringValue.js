// Module ID: 5065
// Function ID: 5066
// Name: getStringValue
// Dependencies: [5063]

// Module 5065 (getStringValue)
import getStringValue from "getStringValue" /* 5063 */;

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
