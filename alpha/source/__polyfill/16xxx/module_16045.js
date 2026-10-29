// Module ID: 16045
// Function ID: 16046
// Dependencies: [16046, 16048, 16055, 16078, 16066, 16080, 16076, 16081]

// Module 16045
import _mod16046 from "module_16046" /* 16046 */;
import _mod16048 from "module_16048" /* 16048 */;
import _mod16055 from "module_16055" /* 16055 */;
import _mod16066 from "module_16066" /* 16066 */;
import _mod16076 from "module_16076" /* 16076 */;
import _mod16078 from "module_16078" /* 16078 */;
import _mod16080 from "module_16080" /* 16080 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16081 */;

if (!_mod16046) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16048(arg0);
    const tmp4 = _mod16055(arg1);
    if (!_mod16078) {
      if (_mod16066(tmp3, tmp4)) {
        const tmpResult = _mod16080;
        const tmpResult2 = _mod16076;
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
