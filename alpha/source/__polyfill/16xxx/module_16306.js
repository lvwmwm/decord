// Module ID: 16306
// Function ID: 16307
// Dependencies: [16274, 16275, 16307]

// Module 16306
import _mod16275 from "module_16275" /* 16275 */;
import _mod16307 from "module_16307" /* 16307 */;
import getOwnPropertyDescriptor from "module_16274" /* 16274 */;

const f67559 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16307("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16275(f67559);

export default !getOwnPropertyDescriptor && !_mod16275(f67559);
