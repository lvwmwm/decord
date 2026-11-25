// Module ID: 15716
// Function ID: 15717
// Dependencies: [15684, 15685, 15717]

// Module 15716
import _mod15685 from "module_15685" /* 15685 */;
import _mod15717 from "module_15717" /* 15717 */;
import getOwnPropertyDescriptor from "module_15684" /* 15684 */;

const f66147 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15717("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15685(f66147);

export default !getOwnPropertyDescriptor && !_mod15685(f66147);
