// Module ID: 15774
// Function ID: 15775
// Dependencies: [15742, 15743, 15775]

// Module 15774
import _mod15743 from "module_15743" /* 15743 */;
import _mod15775 from "module_15775" /* 15775 */;
import getOwnPropertyDescriptor from "module_15742" /* 15742 */;

const f66401 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15775("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15743(f66401);

export default !getOwnPropertyDescriptor && !_mod15743(f66401);
