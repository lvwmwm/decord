// Module ID: 15521
// Function ID: 15522
// Dependencies: [15489, 15490, 15522]

// Module 15521
import _mod15490 from "module_15490" /* 15490 */;
import _mod15522 from "module_15522" /* 15522 */;
import getOwnPropertyDescriptor from "module_15489" /* 15489 */;

const f70877 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15522("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15490(f70877);

export default !getOwnPropertyDescriptor && !_mod15490(f70877);
