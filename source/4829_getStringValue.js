// Module ID: 4829
// Function ID: 4830
// Name: getStringValue
// Dependencies: [4827]

// Module 4829 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4827) /* getStringValue */.getStringValue(value);
  }
};
arg5.default = obj;
