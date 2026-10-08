// Module ID: 14413
// Function ID: 14414
// Dependencies: [14381, 14382, 14414]

// Module 14413
import _mod14382 from "module_14382" /* 14382 */;
import _mod14414 from "module_14414" /* 14414 */;
import getOwnPropertyDescriptor from "module_14381" /* 14381 */;

const f66970 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14414("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14382(f66970);

export default !getOwnPropertyDescriptor && !_mod14382(f66970);
