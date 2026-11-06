// Module ID: 16418
// Function ID: 16419
// Dependencies: [16386, 16387, 16419]

// Module 16418
import _mod16387 from "module_16387" /* 16387 */;
import _mod16419 from "module_16419" /* 16419 */;
import getOwnPropertyDescriptor from "module_16386" /* 16386 */;

const f68108 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16419("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16387(f68108);

export default !getOwnPropertyDescriptor && !_mod16387(f68108);
