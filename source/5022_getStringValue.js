// Module ID: 5022
// Function ID: 5023
// Name: getStringValue
// Dependencies: [5019]

// Module 5022 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(5019) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
