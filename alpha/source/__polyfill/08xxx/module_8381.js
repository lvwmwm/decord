// Module ID: 8381
// Function ID: 8382
// Dependencies: [8378]

// Module 8381
import _mod8378 from "module_8378" /* 8378 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8378;
    return obj.getStringValue(value);
  }
};

export default obj;
