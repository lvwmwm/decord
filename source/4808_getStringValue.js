// Module ID: 4808
// Function ID: 41613
// Name: getStringValue
// Dependencies: [4805]

// Module 4808 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
let obj = { 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj = {
  name: "MPFVersion",
  description(value) {
    return require(4805) /* getStringValue */.getStringValue(value);
  }
};
obj[45056] = obj;
arg5.default = obj;
