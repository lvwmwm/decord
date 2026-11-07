// Module ID: 16466
// Function ID: 16467
// Dependencies: [16434, 16435, 16467]

// Module 16466
import _mod16435 from "module_16435" /* 16435 */;
import _mod16467 from "module_16467" /* 16467 */;
import getOwnPropertyDescriptor from "module_16434" /* 16434 */;

const f68393 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16467("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16435(f68393);

export default !getOwnPropertyDescriptor && !_mod16435(f68393);
