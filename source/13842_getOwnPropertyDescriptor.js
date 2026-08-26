// Module ID: 13842
// Function ID: 13843
// Name: getOwnPropertyDescriptor
// Dependencies: [13843]

// Module 13842 (getOwnPropertyDescriptor)
import _mod13843 from "module_13843" /* 13843 */;


export default !_mod13843(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
