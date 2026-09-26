// Module ID: 5489
// Function ID: 5490
// Dependencies: [5487]

// Module 5489
import _mod5487 from "module_5487" /* 5487 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    return _mod5487.getStringValue(value);
  }
};

export default obj;
