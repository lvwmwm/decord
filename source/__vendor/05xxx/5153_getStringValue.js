// Module ID: 5153
// Function ID: 5154
// Name: getStringValue
// Dependencies: [5150]

// Module 5153 (getStringValue)
import getStringValue from "getStringValue" /* 5150 */;

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
