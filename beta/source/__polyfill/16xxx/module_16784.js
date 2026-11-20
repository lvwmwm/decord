// Module ID: 16784
// Function ID: 16785
// Dependencies: [16752, 16753, 16785]

// Module 16784
import _mod16753 from "module_16753" /* 16753 */;
import _mod16785 from "module_16785" /* 16785 */;
import getOwnPropertyDescriptor from "module_16752" /* 16752 */;

const f70174 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16785("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16753(f70174);

export default !getOwnPropertyDescriptor && !_mod16753(f70174);
