// Module ID: 4807
// Function ID: 41611
// Name: getStringValue
// Dependencies: [4805]

// Module 4807 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
let obj = { 1: "InteroperabilityIndex", 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4805) /* getStringValue */.getStringValue(value);
  }
};
obj[2] = obj;
arg5.default = obj;
