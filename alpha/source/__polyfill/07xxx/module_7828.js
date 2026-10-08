// Module ID: 7828
// Function ID: 7829
// Dependencies: [7825]

// Module 7828
import _mod7825 from "module_7825" /* 7825 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7825;
    return obj.getStringValue(value);
  }
};

export default obj;
