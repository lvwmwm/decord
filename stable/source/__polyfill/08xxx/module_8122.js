// Module ID: 8122
// Function ID: 8123
// Dependencies: [8120]

// Module 8122
import _mod8120 from "module_8120" /* 8120 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8120;
    return obj.getStringValue(value);
  }
};

export default obj;
