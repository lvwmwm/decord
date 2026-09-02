// Module ID: 14178
// Function ID: 14179
// Name: getOwnPropertyDescriptor
// Dependencies: [14179]

// Module 14178 (getOwnPropertyDescriptor)
import _mod14179 from "module_14179" /* 14179 */;


export default !_mod14179(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
