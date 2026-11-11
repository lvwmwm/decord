// Module ID: 8900
// Function ID: 8901
// Dependencies: [8897]

// Module 8900
import _mod8897 from "module_8897" /* 8897 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8897;
    return obj.getStringValue(value);
  }
};

export default obj;
