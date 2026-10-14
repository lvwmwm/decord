// Module ID: 7862
// Function ID: 7863
// Dependencies: [7860]

// Module 7862
import _mod7860 from "module_7860" /* 7860 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7860;
    return obj.getStringValue(value);
  }
};

export default obj;
