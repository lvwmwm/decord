// Module ID: 5492
// Function ID: 5493
// Dependencies: [5489]

// Module 5492
import _mod5489 from "module_5489" /* 5489 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5489.getStringValue(value);
  }
};

export default obj;
