// Module ID: 15571
// Function ID: 15572
// Dependencies: [15539, 15540, 15572]

// Module 15571
import _mod15540 from "module_15540" /* 15540 */;
import _mod15572 from "module_15572" /* 15572 */;
import getOwnPropertyDescriptor from "module_15539" /* 15539 */;

const f65815 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15572("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15540(f65815);

export default !getOwnPropertyDescriptor && !_mod15540(f65815);
