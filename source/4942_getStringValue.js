// Module ID: 4942
// Function ID: 4943
// Name: getStringValue
// Dependencies: [4940]

// Module 4942 (getStringValue)
import getStringValue from "getStringValue" /* 4940 */;

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
