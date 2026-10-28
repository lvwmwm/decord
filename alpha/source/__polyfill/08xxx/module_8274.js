// Module ID: 8274
// Function ID: 8275
// Dependencies: [8271]

// Module 8274
import _mod8271 from "module_8271" /* 8271 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8271;
    return obj.getStringValue(value);
  }
};

export default obj;
