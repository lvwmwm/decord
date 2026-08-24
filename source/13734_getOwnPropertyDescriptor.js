// Module ID: 13734
// Function ID: 13735
// Name: getOwnPropertyDescriptor
// Dependencies: [13735]

// Module 13734 (getOwnPropertyDescriptor)
import _mod13735 from "module_13735" /* 13735 */;


export default !_mod13735(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
