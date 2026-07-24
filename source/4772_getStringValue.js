// Module ID: 4772
// Function ID: 41483
// Name: getStringValue
// Dependencies: [4770]

// Module 4772 (getStringValue)
const require = arg1;
const dependencyMap = arg6;
let obj = { 1: "InteroperabilityIndex", 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj = {
  name: "InteroperabilityVersion",
  description(value) {
    return require(4770) /* getStringValue */.getStringValue(value);
  }
};
obj[2] = obj;
arg5.default = obj;
