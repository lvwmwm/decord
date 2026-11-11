// Module ID: 8899
// Function ID: 8900
// Dependencies: [8897]

// Module 8899
import _mod8897 from "module_8897" /* 8897 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8897;
    return obj.getStringValue(value);
  }
};

export default obj;
