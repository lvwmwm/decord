// Module ID: 4999
// Function ID: 5000
// Name: getStringValue
// Dependencies: [4997]

// Module 4999 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4997) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
