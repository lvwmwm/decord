// Module ID: 8298
// Function ID: 8299
// Dependencies: [8296]

// Module 8298
import _mod8296 from "module_8296" /* 8296 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8296;
    return obj.getStringValue(value);
  }
};

export default obj;
