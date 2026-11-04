// Module ID: 15614
// Function ID: 15615
// Dependencies: [15582, 15583, 15615]

// Module 15614
import _mod15583 from "module_15583" /* 15583 */;
import _mod15615 from "module_15615" /* 15615 */;
import getOwnPropertyDescriptor from "module_15582" /* 15582 */;

const f71278 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15615("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15583(f71278);

export default !getOwnPropertyDescriptor && !_mod15583(f71278);
