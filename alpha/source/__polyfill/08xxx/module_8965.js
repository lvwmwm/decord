// Module ID: 8965
// Function ID: 8966
// Dependencies: [8963]

// Module 8965
import _mod8963 from "module_8963" /* 8963 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8963;
    return obj.getStringValue(value);
  }
};

export default obj;
