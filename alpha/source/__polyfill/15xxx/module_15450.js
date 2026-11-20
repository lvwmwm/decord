// Module ID: 15450
// Function ID: 15451
// Dependencies: [15418, 15419, 15451]

// Module 15450
import _mod15419 from "module_15419" /* 15419 */;
import _mod15451 from "module_15451" /* 15451 */;
import getOwnPropertyDescriptor from "module_15418" /* 15418 */;

const f65553 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15451("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15419(f65553);

export default !getOwnPropertyDescriptor && !_mod15419(f65553);
