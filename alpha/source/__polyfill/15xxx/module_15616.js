// Module ID: 15616
// Function ID: 15617
// Dependencies: [15584, 15585, 15617]

// Module 15616
import _mod15585 from "module_15585" /* 15585 */;
import _mod15617 from "module_15617" /* 15617 */;
import getOwnPropertyDescriptor from "module_15584" /* 15584 */;

const f71390 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15617("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15585(f71390);

export default !getOwnPropertyDescriptor && !_mod15585(f71390);
