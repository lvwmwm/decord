// Module ID: 8239
// Function ID: 8240
// Dependencies: [8237]

// Module 8239
import _mod8237 from "module_8237" /* 8237 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8237;
    return obj.getStringValue(value);
  }
};

export default obj;
