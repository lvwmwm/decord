// Module ID: 8072
// Function ID: 8073
// Dependencies: [8070]

// Module 8072
import _mod8070 from "module_8070" /* 8070 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8070;
    return obj.getStringValue(value);
  }
};

export default obj;
