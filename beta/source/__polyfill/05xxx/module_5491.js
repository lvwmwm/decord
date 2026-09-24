// Module ID: 5491
// Function ID: 5492
// Dependencies: [5489]

// Module 5491
import _mod5489 from "module_5489" /* 5489 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5489.getStringValue(value);
  }
};

export default obj;
