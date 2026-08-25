// Module ID: 5066
// Function ID: 5067
// Name: getStringValue
// Dependencies: [5063]

// Module 5066 (getStringValue)
import getStringValue from "getStringValue" /* 5063 */;

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
