// Module ID: 15486
// Function ID: 15487
// Dependencies: [15454, 15455, 15487]

// Module 15486
import _mod15455 from "module_15455" /* 15455 */;
import _mod15487 from "module_15487" /* 15487 */;
import getOwnPropertyDescriptor from "module_15454" /* 15454 */;

const f66261 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15487("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15455(f66261);

export default !getOwnPropertyDescriptor && !_mod15455(f66261);
