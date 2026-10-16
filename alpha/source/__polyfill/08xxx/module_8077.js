// Module ID: 8077
// Function ID: 8078
// Dependencies: [8074]

// Module 8077
import _mod8074 from "module_8074" /* 8074 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8074;
    return obj.getStringValue(value);
  }
};

export default obj;
