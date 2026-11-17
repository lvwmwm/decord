// Module ID: 16817
// Function ID: 16818
// Dependencies: [16785, 16786, 16818]

// Module 16817
import _mod16786 from "module_16786" /* 16786 */;
import _mod16818 from "module_16818" /* 16818 */;
import getOwnPropertyDescriptor from "module_16785" /* 16785 */;

const f70321 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16818("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16786(f70321);

export default !getOwnPropertyDescriptor && !_mod16786(f70321);
