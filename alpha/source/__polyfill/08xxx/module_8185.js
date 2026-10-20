// Module ID: 8185
// Function ID: 8186
// Dependencies: [8183]

// Module 8185
import _mod8183 from "module_8183" /* 8183 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8183;
    return obj.getStringValue(value);
  }
};

export default obj;
