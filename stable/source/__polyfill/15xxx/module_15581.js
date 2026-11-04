// Module ID: 15581
// Function ID: 15582
// Dependencies: [15582, 15584, 15591, 15614, 15602, 15616, 15612, 15617]

// Module 15581
import _mod15582 from "module_15582" /* 15582 */;
import _mod15584 from "module_15584" /* 15584 */;
import _mod15591 from "module_15591" /* 15591 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15612 from "module_15612" /* 15612 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15616 from "module_15616" /* 15616 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 15617 */;

if (!_mod15582) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15584(arg0);
    const tmp4 = _mod15591(arg1);
    if (!_mod15614) {
      if (_mod15602(tmp3, tmp4)) {
        const tmpResult = _mod15616;
        const tmpResult2 = _mod15612;
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
