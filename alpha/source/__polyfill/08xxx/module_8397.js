// Module ID: 8397
// Function ID: 8398
// Dependencies: [8395]

// Module 8397
import _mod8395 from "module_8395" /* 8395 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8395;
    return obj.getStringValue(value);
  }
};

export default obj;
