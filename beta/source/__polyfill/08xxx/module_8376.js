// Module ID: 8376
// Function ID: 8377
// Dependencies: [8374]

// Module 8376
import _mod8374 from "module_8374" /* 8374 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8374;
    return obj.getStringValue(value);
  }
};

export default obj;
