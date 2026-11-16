// Module ID: 16505
// Function ID: 16506
// Dependencies: [16473, 16474, 16506]

// Module 16505
import _mod16474 from "module_16474" /* 16474 */;
import _mod16506 from "module_16506" /* 16506 */;
import getOwnPropertyDescriptor from "module_16473" /* 16473 */;

const f68500 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16506("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16474(f68500);

export default !getOwnPropertyDescriptor && !_mod16474(f68500);
