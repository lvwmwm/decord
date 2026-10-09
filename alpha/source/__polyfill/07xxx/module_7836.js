// Module ID: 7836
// Function ID: 7837
// Dependencies: [7834]

// Module 7836
import _mod7834 from "module_7834" /* 7834 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7834;
    return obj.getStringValue(value);
  }
};

export default obj;
