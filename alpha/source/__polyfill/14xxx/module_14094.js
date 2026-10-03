// Module ID: 14094
// Function ID: 14095
// Dependencies: [14062, 14063, 14095]

// Module 14094
import _mod14063 from "module_14063" /* 14063 */;
import _mod14095 from "module_14095" /* 14095 */;
import getOwnPropertyDescriptor from "module_14062" /* 14062 */;

const f66104 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14095("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14063(f66104);

export default !getOwnPropertyDescriptor && !_mod14063(f66104);
