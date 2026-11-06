// Module ID: 8398
// Function ID: 8399
// Dependencies: [8395]

// Module 8398
import _mod8395 from "module_8395" /* 8395 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8395;
    return obj.getStringValue(value);
  }
};

export default obj;
