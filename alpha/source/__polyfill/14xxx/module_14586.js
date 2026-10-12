// Module ID: 14586
// Function ID: 14587
// Dependencies: [14554, 14555, 14587]

// Module 14586
import _mod14555 from "module_14555" /* 14555 */;
import _mod14587 from "module_14587" /* 14587 */;
import getOwnPropertyDescriptor from "module_14554" /* 14554 */;

const f67563 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14587("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14555(f67563);

export default !getOwnPropertyDescriptor && !_mod14555(f67563);
