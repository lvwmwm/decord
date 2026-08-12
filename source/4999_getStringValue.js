// Module ID: 4999
// Function ID: 5000
// Name: getStringValue
// Dependencies: [4996]

// Module 4999 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(4996) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
