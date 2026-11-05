// Module ID: 16421
// Function ID: 16422
// Dependencies: [16389, 16390, 16422]

// Module 16421
import _mod16390 from "module_16390" /* 16390 */;
import _mod16422 from "module_16422" /* 16422 */;
import getOwnPropertyDescriptor from "module_16389" /* 16389 */;

const f68069 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16422("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16390(f68069);

export default !getOwnPropertyDescriptor && !_mod16390(f68069);
