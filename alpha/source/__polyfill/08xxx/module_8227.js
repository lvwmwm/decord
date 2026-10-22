// Module ID: 8227
// Function ID: 8228
// Dependencies: [8224]

// Module 8227
import _mod8224 from "module_8224" /* 8224 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8224;
    return obj.getStringValue(value);
  }
};

export default obj;
