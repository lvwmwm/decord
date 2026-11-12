// Module ID: 8409
// Function ID: 8410
// Dependencies: [8407]

// Module 8409
import _mod8407 from "module_8407" /* 8407 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8407;
    return obj.getStringValue(value);
  }
};

export default obj;
