// Module ID: 8190
// Function ID: 8191
// Dependencies: [8187]

// Module 8190
import _mod8187 from "module_8187" /* 8187 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8187;
    return obj.getStringValue(value);
  }
};

export default obj;
