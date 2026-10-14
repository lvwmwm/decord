// Module ID: 14945
// Function ID: 14946
// Dependencies: [14913, 14914, 14946]

// Module 14945
import _mod14914 from "module_14914" /* 14914 */;
import _mod14946 from "module_14946" /* 14946 */;
import getOwnPropertyDescriptor from "module_14913" /* 14913 */;

const f68920 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14946("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14914(f68920);

export default !getOwnPropertyDescriptor && !_mod14914(f68920);
