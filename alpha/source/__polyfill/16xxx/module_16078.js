// Module ID: 16078
// Function ID: 16079
// Dependencies: [16046, 16047, 16079]

// Module 16078
import _mod16047 from "module_16047" /* 16047 */;
import _mod16079 from "module_16079" /* 16079 */;
import getOwnPropertyDescriptor from "module_16046" /* 16046 */;

const f72882 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16079("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16047(f72882);

export default !getOwnPropertyDescriptor && !_mod16047(f72882);
