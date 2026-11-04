// Module ID: 8446
// Function ID: 8447
// Dependencies: [8444]

// Module 8446
import _mod8444 from "module_8444" /* 8444 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8444;
    return obj.getStringValue(value);
  }
};

export default obj;
