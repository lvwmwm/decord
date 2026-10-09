// Module ID: 7837
// Function ID: 7838
// Dependencies: [7834]

// Module 7837
import _mod7834 from "module_7834" /* 7834 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7834;
    return obj.getStringValue(value);
  }
};

export default obj;
