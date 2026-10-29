// Module ID: 8295
// Function ID: 8296
// Dependencies: [8293]

// Module 8295
import _mod8293 from "module_8293" /* 8293 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8293;
    return obj.getStringValue(value);
  }
};

export default obj;
