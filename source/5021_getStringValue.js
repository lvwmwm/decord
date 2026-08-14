// Module ID: 5021
// Function ID: 5022
// Name: getStringValue
// Dependencies: [5019]

// Module 5021 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(5019) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
