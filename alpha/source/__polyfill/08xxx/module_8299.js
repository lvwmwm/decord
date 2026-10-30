// Module ID: 8299
// Function ID: 8300
// Dependencies: [8296]

// Module 8299
import _mod8296 from "module_8296" /* 8296 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8296;
    return obj.getStringValue(value);
  }
};

export default obj;
