// Module ID: 8273
// Function ID: 8274
// Dependencies: [8271]

// Module 8273
import _mod8271 from "module_8271" /* 8271 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8271;
    return obj.getStringValue(value);
  }
};

export default obj;
