// Module ID: 8451
// Function ID: 8452
// Dependencies: [8449]

// Module 8451
import _mod8449 from "module_8449" /* 8449 */;

let obj = { 1: "InteroperabilityIndex", 2: null, 4096: "RelatedImageFileFormat", 4097: "RelatedImageWidth", 4098: "RelatedImageHeight" };
obj[2] = {
  name: "InteroperabilityVersion",
  description(value) {
    const obj = _mod8449;
    return obj.getStringValue(value);
  }
};

export default obj;
