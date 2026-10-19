// Module ID: 8123
// Function ID: 8124
// Dependencies: [8120]

// Module 8123
import _mod8120 from "module_8120" /* 8120 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8120;
    return obj.getStringValue(value);
  }
};

export default obj;
