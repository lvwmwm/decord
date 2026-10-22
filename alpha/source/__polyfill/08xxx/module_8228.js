// Module ID: 8228
// Function ID: 8229
// Dependencies: [8225]

// Module 8228
import _mod8225 from "module_8225" /* 8225 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8225;
    return obj.getStringValue(value);
  }
};

export default obj;
