// Module ID: 15575
// Function ID: 15576
// Dependencies: [15543, 15544, 15576]

// Module 15575
import _mod15544 from "module_15544" /* 15544 */;
import _mod15576 from "module_15576" /* 15576 */;
import getOwnPropertyDescriptor from "module_15543" /* 15543 */;

const f71178 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15576("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15544(f71178);

export default !getOwnPropertyDescriptor && !_mod15544(f71178);
