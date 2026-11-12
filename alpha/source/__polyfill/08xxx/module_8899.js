// Module ID: 8899
// Function ID: 8900
// Dependencies: [8896]

// Module 8899
import _mod8896 from "module_8896" /* 8896 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8896;
    return obj.getStringValue(value);
  }
};

export default obj;
