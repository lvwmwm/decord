// Module ID: 16664
// Function ID: 16665
// Dependencies: [16632, 16633, 16665]

// Module 16664
import _mod16633 from "module_16633" /* 16633 */;
import _mod16665 from "module_16665" /* 16665 */;
import getOwnPropertyDescriptor from "module_16632" /* 16632 */;

const f69180 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16665("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16633(f69180);

export default !getOwnPropertyDescriptor && !_mod16633(f69180);
