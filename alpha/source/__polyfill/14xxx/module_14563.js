// Module ID: 14563
// Function ID: 14564
// Dependencies: [14531, 14532, 14564]

// Module 14563
import _mod14532 from "module_14532" /* 14532 */;
import _mod14564 from "module_14564" /* 14564 */;
import getOwnPropertyDescriptor from "module_14531" /* 14531 */;

const f67456 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14564("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14532(f67456);

export default !getOwnPropertyDescriptor && !_mod14532(f67456);
