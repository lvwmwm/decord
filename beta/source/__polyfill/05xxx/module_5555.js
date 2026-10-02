// Module ID: 5555
// Function ID: 5556
// Dependencies: [5552]

// Module 5555
import _mod5552 from "module_5552" /* 5552 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod5552;
    return obj.getStringValue(value);
  }
};

export default obj;
