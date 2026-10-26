// Module ID: 8241
// Function ID: 8242
// Dependencies: [8239]

// Module 8241
import _mod8239 from "module_8239" /* 8239 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8239;
    return obj.getStringValue(value);
  }
};

export default obj;
