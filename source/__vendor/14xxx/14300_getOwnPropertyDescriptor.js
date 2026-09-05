// Module ID: 14300
// Function ID: 14301
// Name: getOwnPropertyDescriptor
// Dependencies: [14301]

// Module 14300 (getOwnPropertyDescriptor)
import _mod14301 from "module_14301" /* 14301 */;


export default !_mod14301(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
