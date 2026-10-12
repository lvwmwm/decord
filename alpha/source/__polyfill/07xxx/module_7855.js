// Module ID: 7855
// Function ID: 7856
// Dependencies: [7853]

// Module 7855
import _mod7853 from "module_7853" /* 7853 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7853;
    return obj.getStringValue(value);
  }
};

export default obj;
