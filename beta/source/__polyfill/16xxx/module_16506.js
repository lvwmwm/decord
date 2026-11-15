// Module ID: 16506
// Function ID: 16507
// Dependencies: [16474, 16475, 16507]

// Module 16506
import _mod16475 from "module_16475" /* 16475 */;
import _mod16507 from "module_16507" /* 16507 */;
import getOwnPropertyDescriptor from "module_16474" /* 16474 */;

const f68512 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16507("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16475(f68512);

export default !getOwnPropertyDescriptor && !_mod16475(f68512);
