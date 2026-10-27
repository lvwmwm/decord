// Module ID: 8240
// Function ID: 8241
// Dependencies: [8237]

// Module 8240
import _mod8237 from "module_8237" /* 8237 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8237;
    return obj.getStringValue(value);
  }
};

export default obj;
