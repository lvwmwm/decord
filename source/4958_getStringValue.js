// Module ID: 4958
// Function ID: 4959
// Name: getStringValue
// Dependencies: [4956]

// Module 4958 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4956) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
