// Module ID: 16158
// Function ID: 16159
// Dependencies: [16126, 16127, 16159]

// Module 16158
import _mod16127 from "module_16127" /* 16127 */;
import _mod16159 from "module_16159" /* 16159 */;
import getOwnPropertyDescriptor from "module_16126" /* 16126 */;

const f67456 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16159("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16127(f67456);

export default !getOwnPropertyDescriptor && !_mod16127(f67456);
