// Module ID: 8966
// Function ID: 8967
// Dependencies: [8963]

// Module 8966
import _mod8963 from "module_8963" /* 8963 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8963;
    return obj.getStringValue(value);
  }
};

export default obj;
