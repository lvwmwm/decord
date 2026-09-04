// Module ID: 14226
// Function ID: 14227
// Name: getOwnPropertyDescriptor
// Dependencies: [14227]

// Module 14226 (getOwnPropertyDescriptor)
import _mod14227 from "module_14227" /* 14227 */;


export default !_mod14227(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
