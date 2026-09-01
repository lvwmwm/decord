// Module ID: 5184
// Function ID: 5185
// Name: getStringValue
// Dependencies: [5182]

// Module 5184 (getStringValue)
import getStringValue from "getStringValue" /* 5182 */;

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
