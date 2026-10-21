// Module ID: 8218
// Function ID: 8219
// Dependencies: [8215]

// Module 8218
import _mod8215 from "module_8215" /* 8215 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8215;
    return obj.getStringValue(value);
  }
};

export default obj;
