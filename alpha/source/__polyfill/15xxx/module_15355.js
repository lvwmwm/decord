// Module ID: 15355
// Function ID: 15356
// Dependencies: [15323, 15324, 15356]

// Module 15355
import _mod15324 from "module_15324" /* 15324 */;
import _mod15356 from "module_15356" /* 15356 */;
import getOwnPropertyDescriptor from "module_15323" /* 15323 */;

const f69912 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15356("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15324(f69912);

export default !getOwnPropertyDescriptor && !_mod15324(f69912);
