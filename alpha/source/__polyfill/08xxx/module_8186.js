// Module ID: 8186
// Function ID: 8187
// Dependencies: [8183]

// Module 8186
import _mod8183 from "module_8183" /* 8183 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8183;
    return obj.getStringValue(value);
  }
};

export default obj;
