// Module ID: 4909
// Function ID: 4910
// Name: getStringValue
// Dependencies: [4907]

// Module 4909 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4907) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
