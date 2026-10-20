// Module ID: 7850
// Function ID: 7851
// Dependencies: [7848]

// Module 7850
import _mod7848 from "module_7848" /* 7848 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7848;
    return obj.getStringValue(value);
  }
};

export default obj;
