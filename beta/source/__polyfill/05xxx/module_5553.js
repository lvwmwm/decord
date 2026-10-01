// Module ID: 5553
// Function ID: 5554
// Dependencies: [5551]

// Module 5553
import _mod5551 from "module_5551" /* 5551 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod5551;
    return obj.getStringValue(value);
  }
};

export default obj;
