// Module ID: 8447
// Function ID: 8448
// Dependencies: [8444]

// Module 8447
import _mod8444 from "module_8444" /* 8444 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8444;
    return obj.getStringValue(value);
  }
};

export default obj;
