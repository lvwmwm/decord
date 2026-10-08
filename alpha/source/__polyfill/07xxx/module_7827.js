// Module ID: 7827
// Function ID: 7828
// Dependencies: [7825]

// Module 7827
import _mod7825 from "module_7825" /* 7825 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod7825;
    return obj.getStringValue(value);
  }
};

export default obj;
