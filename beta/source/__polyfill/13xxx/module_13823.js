// Module ID: 13823
// Function ID: 13824
// Dependencies: [13791, 13792, 13824]

// Module 13823
import _mod13792 from "module_13792" /* 13792 */;
import _mod13824 from "module_13824" /* 13824 */;
import getOwnPropertyDescriptor from "module_13791" /* 13791 */;

const f60352 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod13824("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod13792(f60352);

export default !getOwnPropertyDescriptor && !_mod13792(f60352);
