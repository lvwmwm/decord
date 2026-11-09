// Module ID: 16476
// Function ID: 16477
// Dependencies: [16444, 16445, 16477]

// Module 16476
import _mod16445 from "module_16445" /* 16445 */;
import _mod16477 from "module_16477" /* 16477 */;
import getOwnPropertyDescriptor from "module_16444" /* 16444 */;

const f68430 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16477("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16445(f68430);

export default !getOwnPropertyDescriptor && !_mod16445(f68430);
