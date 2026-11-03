// Module ID: 8431
// Function ID: 8432
// Dependencies: [8428]

// Module 8431
import _mod8428 from "module_8428" /* 8428 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8428;
    return obj.getStringValue(value);
  }
};

export default obj;
