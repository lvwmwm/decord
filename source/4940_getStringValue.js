// Module ID: 4940
// Function ID: 4941
// Name: getStringValue
// Dependencies: [4937]

// Module 4940 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(4937) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
