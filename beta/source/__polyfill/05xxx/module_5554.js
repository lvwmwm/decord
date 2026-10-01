// Module ID: 5554
// Function ID: 5555
// Dependencies: [5551]

// Module 5554
import _mod5551 from "module_5551" /* 5551 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod5551;
    return obj.getStringValue(value);
  }
};

export default obj;
