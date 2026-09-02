// Module ID: 5193
// Function ID: 5194
// Name: getStringValue
// Dependencies: [5190]

// Module 5193 (getStringValue)
import getStringValue from "getStringValue" /* 5190 */;

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
