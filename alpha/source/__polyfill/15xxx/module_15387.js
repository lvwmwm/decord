// Module ID: 15387
// Function ID: 15388
// Dependencies: [15355, 15356, 15388]

// Module 15387
import _mod15356 from "module_15356" /* 15356 */;
import _mod15388 from "module_15388" /* 15388 */;
import getOwnPropertyDescriptor from "module_15355" /* 15355 */;

const f70343 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15388("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15356(f70343);

export default !getOwnPropertyDescriptor && !_mod15356(f70343);
