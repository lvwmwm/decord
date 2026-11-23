// Module ID: 15573
// Function ID: 15574
// Dependencies: [15541, 15542, 15574]

// Module 15573
import _mod15542 from "module_15542" /* 15542 */;
import _mod15574 from "module_15574" /* 15574 */;
import getOwnPropertyDescriptor from "module_15541" /* 15541 */;

const f65788 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15574("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15542(f65788);

export default !getOwnPropertyDescriptor && !_mod15542(f65788);
