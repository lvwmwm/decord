// Module ID: 8075
// Function ID: 8076
// Dependencies: [8073]

// Module 8075
import _mod8073 from "module_8073" /* 8073 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8073;
    return obj.getStringValue(value);
  }
};

export default obj;
