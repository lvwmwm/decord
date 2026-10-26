// Module ID: 15579
// Function ID: 15580
// Dependencies: [15547, 15548, 15580]

// Module 15579
import _mod15548 from "module_15548" /* 15548 */;
import _mod15580 from "module_15580" /* 15580 */;
import getOwnPropertyDescriptor from "module_15547" /* 15547 */;

const f71202 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15580("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15548(f71202);

export default !getOwnPropertyDescriptor && !_mod15548(f71202);
