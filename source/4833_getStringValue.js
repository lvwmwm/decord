// Module ID: 4833
// Function ID: 4834
// Name: getStringValue
// Dependencies: [4831]

// Module 4833 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4831) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
