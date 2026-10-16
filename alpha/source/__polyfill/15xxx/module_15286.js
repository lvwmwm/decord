// Module ID: 15286
// Function ID: 15287
// Dependencies: [15254, 15255, 15287]

// Module 15286
import _mod15255 from "module_15255" /* 15255 */;
import _mod15287 from "module_15287" /* 15287 */;
import getOwnPropertyDescriptor from "module_15254" /* 15254 */;

const f69694 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15287("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15255(f69694);

export default !getOwnPropertyDescriptor && !_mod15255(f69694);
