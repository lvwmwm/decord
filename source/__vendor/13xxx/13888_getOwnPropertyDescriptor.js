// Module ID: 13888
// Function ID: 13889
// Name: getOwnPropertyDescriptor
// Dependencies: [13889]

// Module 13888 (getOwnPropertyDescriptor)
import _mod13889 from "module_13889" /* 13889 */;


export default !_mod13889(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
