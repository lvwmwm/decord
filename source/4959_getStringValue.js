// Module ID: 4959
// Function ID: 4960
// Name: getStringValue
// Dependencies: [4956]

// Module 4959 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(4956) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
