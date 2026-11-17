// Module ID: 8977
// Function ID: 8978
// Dependencies: [8974]

// Module 8977
import _mod8974 from "module_8974" /* 8974 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8974;
    return obj.getStringValue(value);
  }
};

export default obj;
