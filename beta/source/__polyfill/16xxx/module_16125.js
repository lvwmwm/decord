// Module ID: 16125
// Function ID: 16126
// Dependencies: [16126, 16128, 16135, 16158, 16146, 16160, 16156, 16161]

// Module 16125
import _mod16126 from "module_16126" /* 16126 */;
import _mod16128 from "module_16128" /* 16128 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16146 from "module_16146" /* 16146 */;
import _mod16156 from "module_16156" /* 16156 */;
import _mod16158 from "module_16158" /* 16158 */;
import _mod16160 from "module_16160" /* 16160 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16161 */;

if (!_mod16126) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16128(arg0);
    const tmp4 = _mod16135(arg1);
    if (!_mod16158) {
      if (_mod16146(tmp3, tmp4)) {
        const tmpResult = _mod16160;
        const tmpResult2 = _mod16156;
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
