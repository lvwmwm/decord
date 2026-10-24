// Module ID: 8242
// Function ID: 8243
// Dependencies: [8239]

// Module 8242
import _mod8239 from "module_8239" /* 8239 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8239;
    return obj.getStringValue(value);
  }
};

export default obj;
