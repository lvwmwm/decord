// Module ID: 7854
// Function ID: 7855
// Dependencies: [7852]

// Module 7854
import _mod7852 from "module_7852" /* 7852 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7852;
    return obj.getStringValue(value);
  }
};

export default obj;
