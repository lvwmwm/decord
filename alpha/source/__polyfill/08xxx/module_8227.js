// Module ID: 8227
// Function ID: 8228
// Dependencies: [8225]

// Module 8227
import _mod8225 from "module_8225" /* 8225 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8225;
    return obj.getStringValue(value);
  }
};

export default obj;
