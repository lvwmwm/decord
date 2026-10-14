// Module ID: 7863
// Function ID: 7864
// Dependencies: [7860]

// Module 7863
import _mod7860 from "module_7860" /* 7860 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7860;
    return obj.getStringValue(value);
  }
};

export default obj;
