// Module ID: 16508
// Function ID: 16509
// Dependencies: [16476, 16477, 16509]

// Module 16508
import _mod16477 from "module_16477" /* 16477 */;
import _mod16509 from "module_16509" /* 16509 */;
import getOwnPropertyDescriptor from "module_16476" /* 16476 */;

const f68500 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16509("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16477(f68500);

export default !getOwnPropertyDescriptor && !_mod16477(f68500);
