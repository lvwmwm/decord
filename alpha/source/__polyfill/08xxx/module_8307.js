// Module ID: 8307
// Function ID: 8308
// Dependencies: [8304]

// Module 8307
import _mod8304 from "module_8304" /* 8304 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8304;
    return obj.getStringValue(value);
  }
};

export default obj;
