// Module ID: 8976
// Function ID: 8977
// Dependencies: [8974]

// Module 8976
import _mod8974 from "module_8974" /* 8974 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8974;
    return obj.getStringValue(value);
  }
};

export default obj;
