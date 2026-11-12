// Module ID: 16659
// Function ID: 16660
// Dependencies: [16627, 16628, 16660]

// Module 16659
import _mod16628 from "module_16628" /* 16628 */;
import _mod16660 from "module_16660" /* 16660 */;
import getOwnPropertyDescriptor from "module_16627" /* 16627 */;

const f69179 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16660("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16628(f69179);

export default !getOwnPropertyDescriptor && !_mod16628(f69179);
