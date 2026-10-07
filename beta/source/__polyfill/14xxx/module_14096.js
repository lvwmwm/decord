// Module ID: 14096
// Function ID: 14097
// Dependencies: [14064, 14065, 14097]

// Module 14096
import _mod14065 from "module_14065" /* 14065 */;
import _mod14097 from "module_14097" /* 14097 */;
import getOwnPropertyDescriptor from "module_14064" /* 14064 */;

const f66146 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14097("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14065(f66146);

export default !getOwnPropertyDescriptor && !_mod14065(f66146);
