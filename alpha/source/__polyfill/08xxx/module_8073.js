// Module ID: 8073
// Function ID: 8074
// Dependencies: [8070]

// Module 8073
import _mod8070 from "module_8070" /* 8070 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod8070;
    return obj.getStringValue(value);
  }
};

export default obj;
