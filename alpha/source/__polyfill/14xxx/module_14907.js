// Module ID: 14907
// Function ID: 14908
// Dependencies: [14875, 14876, 14908]

// Module 14907
import _mod14876 from "module_14876" /* 14876 */;
import _mod14908 from "module_14908" /* 14908 */;
import getOwnPropertyDescriptor from "module_14875" /* 14875 */;

const f68632 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod14908("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod14876(f68632);

export default !getOwnPropertyDescriptor && !_mod14876(f68632);
