// Module ID: 15581
// Function ID: 15582
// Dependencies: [15549, 15550, 15582]

// Module 15581
import _mod15550 from "module_15550" /* 15550 */;
import _mod15582 from "module_15582" /* 15582 */;
import getOwnPropertyDescriptor from "module_15549" /* 15549 */;

const f65812 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15582("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15550(f65812);

export default !getOwnPropertyDescriptor && !_mod15550(f65812);
