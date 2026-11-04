// Module ID: 16408
// Function ID: 16409
// Dependencies: [16376, 16377, 16409]

// Module 16408
import _mod16377 from "module_16377" /* 16377 */;
import _mod16409 from "module_16409" /* 16409 */;
import getOwnPropertyDescriptor from "module_16376" /* 16376 */;

const f67976 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16409("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16377(f67976);

export default !getOwnPropertyDescriptor && !_mod16377(f67976);
