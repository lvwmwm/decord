// Module ID: 16163
// Function ID: 16164
// Dependencies: [16131, 16132, 16164]

// Module 16163
import _mod16132 from "module_16132" /* 16132 */;
import _mod16164 from "module_16164" /* 16164 */;
import getOwnPropertyDescriptor from "module_16131" /* 16131 */;

const f67463 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16164("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16132(f67463);

export default !getOwnPropertyDescriptor && !_mod16132(f67463);
