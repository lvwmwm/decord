// Module ID: 13825
// Function ID: 13826
// Dependencies: [13793, 13794, 13826]

// Module 13825
import _mod13794 from "module_13794" /* 13794 */;
import _mod13826 from "module_13826" /* 13826 */;
import getOwnPropertyDescriptor from "module_13793" /* 13793 */;

const f65532 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod13826("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod13794(f65532);

export default !getOwnPropertyDescriptor && !_mod13794(f65532);
