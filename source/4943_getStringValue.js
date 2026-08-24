// Module ID: 4943
// Function ID: 4944
// Name: getStringValue
// Dependencies: [4940]

// Module 4943 (getStringValue)
import getStringValue from "getStringValue" /* 4940 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return getStringValue.getStringValue(value);
  }
};
arg5.default = obj;
