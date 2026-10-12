// Module ID: 7856
// Function ID: 7857
// Dependencies: [7853]

// Module 7856
import _mod7853 from "module_7853" /* 7853 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7853;
    return obj.getStringValue(value);
  }
};

export default obj;
