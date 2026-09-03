// Module ID: 14194
// Function ID: 14195
// Name: getOwnPropertyDescriptor
// Dependencies: [14195]

// Module 14194 (getOwnPropertyDescriptor)
import _mod14195 from "module_14195" /* 14195 */;


export default !_mod14195(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
