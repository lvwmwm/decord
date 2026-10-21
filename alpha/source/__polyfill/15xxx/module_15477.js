// Module ID: 15477
// Function ID: 15478
// Dependencies: [15445, 15446, 15478]

// Module 15477
import _mod15446 from "module_15446" /* 15446 */;
import _mod15478 from "module_15478" /* 15478 */;
import getOwnPropertyDescriptor from "module_15445" /* 15445 */;

const f70647 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15478("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15446(f70647);

export default !getOwnPropertyDescriptor && !_mod15446(f70647);
