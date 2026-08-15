// Module ID: 4938
// Function ID: 4939
// Name: getStringValue
// Dependencies: [4935]

// Module 4938 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return require(4935) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
