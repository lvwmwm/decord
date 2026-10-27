// Module ID: 15580
// Function ID: 15581
// Dependencies: [15548, 15549, 15581]

// Module 15580
import _mod15549 from "module_15549" /* 15549 */;
import _mod15581 from "module_15581" /* 15581 */;
import getOwnPropertyDescriptor from "module_15548" /* 15548 */;

const f71219 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15581("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15549(f71219);

export default !getOwnPropertyDescriptor && !_mod15549(f71219);
