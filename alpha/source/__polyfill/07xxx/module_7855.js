// Module ID: 7855
// Function ID: 7856
// Dependencies: [7852]

// Module 7855
import _mod7852 from "module_7852" /* 7852 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7852;
    return obj.getStringValue(value);
  }
};

export default obj;
