// Module ID: 8380
// Function ID: 8381
// Dependencies: [8378]

// Module 8380
import _mod8378 from "module_8378" /* 8378 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8378;
    return obj.getStringValue(value);
  }
};

export default obj;
