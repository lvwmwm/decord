// Module ID: 8076
// Function ID: 8077
// Dependencies: [8073]

// Module 8076
import _mod8073 from "module_8073" /* 8073 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8073;
    return obj.getStringValue(value);
  }
};

export default obj;
