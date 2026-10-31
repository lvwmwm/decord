// Module ID: 8306
// Function ID: 8307
// Dependencies: [8304]

// Module 8306
import _mod8304 from "module_8304" /* 8304 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8304;
    return obj.getStringValue(value);
  }
};

export default obj;
