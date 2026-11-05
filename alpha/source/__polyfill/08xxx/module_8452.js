// Module ID: 8452
// Function ID: 8453
// Dependencies: [8449]

// Module 8452
import _mod8449 from "module_8449" /* 8449 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8449;
    return obj.getStringValue(value);
  }
};

export default obj;
