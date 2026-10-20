// Module ID: 15405
// Function ID: 15406
// Dependencies: [15373, 15374, 15406]

// Module 15405
import _mod15374 from "module_15374" /* 15374 */;
import _mod15406 from "module_15406" /* 15406 */;
import getOwnPropertyDescriptor from "module_15373" /* 15373 */;

const f70407 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15406("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15374(f70407);

export default !getOwnPropertyDescriptor && !_mod15374(f70407);
