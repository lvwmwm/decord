// Module ID: 16159
// Function ID: 16160
// Dependencies: [16127, 16128, 16160]

// Module 16159
import _mod16128 from "module_16128" /* 16128 */;
import _mod16160 from "module_16160" /* 16160 */;
import getOwnPropertyDescriptor from "module_16127" /* 16127 */;

const f67436 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16160("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16128(f67436);

export default !getOwnPropertyDescriptor && !_mod16128(f67436);
