// Module ID: 13869
// Function ID: 13870
// Name: getOwnPropertyDescriptor
// Dependencies: [13870]

// Module 13869 (getOwnPropertyDescriptor)
import _mod13870 from "module_13870" /* 13870 */;


export default !_mod13870(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
