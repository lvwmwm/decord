// Module ID: 8410
// Function ID: 8411
// Dependencies: [8407]

// Module 8410
import _mod8407 from "module_8407" /* 8407 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8407;
    return obj.getStringValue(value);
  }
};

export default obj;
