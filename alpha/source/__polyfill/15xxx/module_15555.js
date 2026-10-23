// Module ID: 15555
// Function ID: 15556
// Dependencies: [15523, 15524, 15556]

// Module 15555
import _mod15524 from "module_15524" /* 15524 */;
import _mod15556 from "module_15556" /* 15556 */;
import getOwnPropertyDescriptor from "module_15523" /* 15523 */;

const f71049 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15556("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15524(f71049);

export default !getOwnPropertyDescriptor && !_mod15524(f71049);
