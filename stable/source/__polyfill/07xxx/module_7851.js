// Module ID: 7851
// Function ID: 7852
// Dependencies: [7848]

// Module 7851
import _mod7848 from "module_7848" /* 7848 */;

let obj = { 45056: null, 45057: "NumberOfImages", 45058: "MPEntry", 45059: "ImageUIDList", 45060: "TotalFrames" };
obj[45056] = {
  name: "MPFVersion",
  description(value) {
    const obj = _mod7848;
    return obj.getStringValue(value);
  }
};

export default obj;
