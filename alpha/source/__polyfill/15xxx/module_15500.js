// Module ID: 15500
// Function ID: 15501
// Dependencies: [15468, 15469, 15501]

// Module 15500
import _mod15469 from "module_15469" /* 15469 */;
import _mod15501 from "module_15501" /* 15501 */;
import getOwnPropertyDescriptor from "module_15468" /* 15468 */;

const f66231 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15501("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15469(f66231);

export default !getOwnPropertyDescriptor && !_mod15469(f66231);
