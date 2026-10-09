// Module ID: 14509
// Function ID: 14510
// Dependencies: [14477, 14478, 14510]

// Module 14509
import _mod14478 from "module_14478" /* 14478 */;
import _mod14510 from "module_14510" /* 14510 */;
import getOwnPropertyDescriptor from "module_14477" /* 14477 */;

const f67246 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14510("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14478(f67246);

export default !getOwnPropertyDescriptor && !_mod14478(f67246);
