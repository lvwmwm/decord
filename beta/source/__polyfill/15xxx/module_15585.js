// Module ID: 15585
// Function ID: 15586
// Dependencies: [15553, 15554, 15586]

// Module 15585
import _mod15554 from "module_15554" /* 15554 */;
import _mod15586 from "module_15586" /* 15586 */;
import getOwnPropertyDescriptor from "module_15553" /* 15553 */;

const f65819 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15586("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15554(f65819);

export default !getOwnPropertyDescriptor && !_mod15554(f65819);
