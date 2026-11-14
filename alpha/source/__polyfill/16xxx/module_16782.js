// Module ID: 16782
// Function ID: 16783
// Dependencies: [16750, 16751, 16783]

// Module 16782
import _mod16751 from "module_16751" /* 16751 */;
import _mod16783 from "module_16783" /* 16783 */;
import getOwnPropertyDescriptor from "module_16750" /* 16750 */;

const f70162 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16783("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16751(f70162);

export default !getOwnPropertyDescriptor && !_mod16751(f70162);
