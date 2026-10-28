// Module ID: 15842
// Function ID: 15843
// Dependencies: [15810, 15811, 15843]

// Module 15842
import _mod15811 from "module_15811" /* 15811 */;
import _mod15843 from "module_15843" /* 15843 */;
import getOwnPropertyDescriptor from "module_15810" /* 15810 */;

const f71836 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15843("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15811(f71836);

export default !getOwnPropertyDescriptor && !_mod15811(f71836);
