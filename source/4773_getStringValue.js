// Module ID: 4773
// Function ID: 41496
// Name: getStringValue
// Dependencies: [4771]

// Module 4773 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
let obj = { 1: "InteroperabilityIndex", 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4771) /* getStringValue */.getStringValue(value);
  }
};
obj[2] = obj;
arg5.default = obj;
