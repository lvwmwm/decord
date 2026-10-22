// Module ID: 8226
// Function ID: 8227
// Dependencies: [8224]

// Module 8226
import _mod8224 from "module_8224" /* 8224 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8224;
    return obj.getStringValue(value);
  }
};

export default obj;
