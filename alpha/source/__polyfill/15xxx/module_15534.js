// Module ID: 15534
// Function ID: 15535
// Dependencies: [15502, 15503, 15535]

// Module 15534
import _mod15503 from "module_15503" /* 15503 */;
import _mod15535 from "module_15535" /* 15535 */;
import getOwnPropertyDescriptor from "module_15502" /* 15502 */;

const f70944 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15535("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15503(f70944);

export default !getOwnPropertyDescriptor && !_mod15503(f70944);
