// Module ID: 8296
// Function ID: 8297
// Dependencies: [8293]

// Module 8296
import _mod8293 from "module_8293" /* 8293 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8293;
    return obj.getStringValue(value);
  }
};

export default obj;
