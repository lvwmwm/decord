// Module ID: 5490
// Function ID: 5491
// Dependencies: [5487]

// Module 5490
import _mod5487 from "module_5487" /* 5487 */;

require = arg1;
const dependencyMap = arg6;
const obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    return _mod5487.getStringValue(value);
  }
};

export default obj;
