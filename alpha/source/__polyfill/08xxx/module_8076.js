// Module ID: 8076
// Function ID: 8077
// Dependencies: [8074]

// Module 8076
import _mod8074 from "module_8074" /* 8074 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8074;
    return obj.getStringValue(value);
  }
};

export default obj;
