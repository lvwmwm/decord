// Module ID: 8377
// Function ID: 8378
// Dependencies: [8374]

// Module 8377
import _mod8374 from "module_8374" /* 8374 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8374;
    return obj.getStringValue(value);
  }
};

export default obj;
