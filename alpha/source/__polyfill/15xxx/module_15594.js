// Module ID: 15594
// Function ID: 15595
// Dependencies: [15562, 15563, 15595]

// Module 15594
import _mod15563 from "module_15563" /* 15563 */;
import _mod15595 from "module_15595" /* 15595 */;
import getOwnPropertyDescriptor from "module_15562" /* 15562 */;

const f65875 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15595("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15563(f65875);

export default !getOwnPropertyDescriptor && !_mod15563(f65875);
