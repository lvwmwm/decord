// Module ID: 15276
// Function ID: 15277
// Dependencies: [15244, 15245, 15277]

// Module 15276
import _mod15245 from "module_15245" /* 15245 */;
import _mod15277 from "module_15277" /* 15277 */;
import getOwnPropertyDescriptor from "module_15244" /* 15244 */;

const f69644 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15277("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15245(f69644);

export default !getOwnPropertyDescriptor && !_mod15245(f69644);
