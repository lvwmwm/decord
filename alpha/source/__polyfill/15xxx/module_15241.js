// Module ID: 15241
// Function ID: 15242
// Dependencies: [15209, 15210, 15242]

// Module 15241
import _mod15210 from "module_15210" /* 15210 */;
import _mod15242 from "module_15242" /* 15242 */;
import getOwnPropertyDescriptor from "module_15209" /* 15209 */;

const f69447 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod15242("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod15210(f69447);

export default !getOwnPropertyDescriptor && !_mod15210(f69447);
