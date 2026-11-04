// Module ID: 16395
// Function ID: 16396
// Dependencies: [16363, 16364, 16396]

// Module 16395
import _mod16364 from "module_16364" /* 16364 */;
import _mod16396 from "module_16396" /* 16396 */;
import getOwnPropertyDescriptor from "module_16363" /* 16363 */;

const f67854 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16396("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16364(f67854);

export default !getOwnPropertyDescriptor && !_mod16364(f67854);
