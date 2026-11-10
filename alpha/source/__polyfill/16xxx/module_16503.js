// Module ID: 16503
// Function ID: 16504
// Dependencies: [16471, 16472, 16504]

// Module 16503
import _mod16472 from "module_16472" /* 16472 */;
import _mod16504 from "module_16504" /* 16504 */;
import getOwnPropertyDescriptor from "module_16471" /* 16471 */;

const f68530 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16504("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16472(f68530);

export default !getOwnPropertyDescriptor && !_mod16472(f68530);
