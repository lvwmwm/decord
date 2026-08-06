// Module ID: 4939
// Function ID: 4940
// Name: getStringValue
// Dependencies: [4937]

// Module 4939 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4937) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
