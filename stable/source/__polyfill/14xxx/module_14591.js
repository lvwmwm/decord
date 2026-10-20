// Module ID: 14591
// Function ID: 14592
// Dependencies: [14559, 14560, 14592]

// Module 14591
import _mod14560 from "module_14560" /* 14560 */;
import _mod14592 from "module_14592" /* 14592 */;
import getOwnPropertyDescriptor from "module_14559" /* 14559 */;

const f67574 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14592("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14560(f67574);

export default !getOwnPropertyDescriptor && !_mod14560(f67574);
