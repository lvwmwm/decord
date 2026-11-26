// Module ID: 15767
// Function ID: 15768
// Dependencies: [15735, 15736, 15768]

// Module 15767
import _mod15736 from "module_15736" /* 15736 */;
import _mod15768 from "module_15768" /* 15768 */;
import getOwnPropertyDescriptor from "module_15735" /* 15735 */;

const f66325 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15768("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15736(f66325);

export default !getOwnPropertyDescriptor && !_mod15736(f66325);
