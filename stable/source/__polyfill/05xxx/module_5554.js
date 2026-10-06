// Module ID: 5554
// Function ID: 5555
// Dependencies: [5552]

// Module 5554
import _mod5552 from "module_5552" /* 5552 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod5552;
    return obj.getStringValue(value);
  }
};

export default obj;
