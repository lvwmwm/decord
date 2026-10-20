// Module ID: 8189
// Function ID: 8190
// Dependencies: [8187]

// Module 8189
import _mod8187 from "module_8187" /* 8187 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8187;
    return obj.getStringValue(value);
  }
};

export default obj;
