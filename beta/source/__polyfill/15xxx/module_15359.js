// Module ID: 15359
// Function ID: 15360
// Dependencies: [15327, 15328, 15360]

// Module 15359
import _mod15328 from "module_15328" /* 15328 */;
import _mod15360 from "module_15360" /* 15360 */;
import getOwnPropertyDescriptor from "module_15327" /* 15327 */;

const f69968 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15360("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15328(f69968);

export default !getOwnPropertyDescriptor && !_mod15328(f69968);
