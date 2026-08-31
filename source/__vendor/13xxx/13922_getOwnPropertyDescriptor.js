// Module ID: 13922
// Function ID: 13923
// Name: getOwnPropertyDescriptor
// Dependencies: [13923]

// Module 13922 (getOwnPropertyDescriptor)
import _mod13923 from "module_13923" /* 13923 */;


export default !_mod13923(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
