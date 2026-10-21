// Module ID: 8217
// Function ID: 8218
// Dependencies: [8215]

// Module 8217
import _mod8215 from "module_8215" /* 8215 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8215;
    return obj.getStringValue(value);
  }
};

export default obj;
