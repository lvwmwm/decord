// Module ID: 8430
// Function ID: 8431
// Dependencies: [8428]

// Module 8430
import _mod8428 from "module_8428" /* 8428 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8428;
    return obj.getStringValue(value);
  }
};

export default obj;
