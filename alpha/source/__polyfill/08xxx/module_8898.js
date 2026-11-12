// Module ID: 8898
// Function ID: 8899
// Dependencies: [8896]

// Module 8898
import _mod8896 from "module_8896" /* 8896 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8896;
    return obj.getStringValue(value);
  }
};

export default obj;
