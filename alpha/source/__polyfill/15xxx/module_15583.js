// Module ID: 15583
// Function ID: 15584
// Dependencies: [15584, 15586, 15593, 15616, 15604, 15618, 15614, 15619]

// Module 15583
import _mod15584 from "module_15584" /* 15584 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15593 from "module_15593" /* 15593 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15616 from "module_15616" /* 15616 */;
import _mod15618 from "module_15618" /* 15618 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15619 */;

if (!_mod15584) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15586(arg0);
    const tmp4 = _mod15593(arg1);
    if (!_mod15616) {
      if (_mod15604(tmp3, tmp4)) {
        const tmpResult = _mod15618;
        const tmpResult2 = _mod15614;
        return tmpResult(!tmpResult2(propertyIsEnumerable.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
