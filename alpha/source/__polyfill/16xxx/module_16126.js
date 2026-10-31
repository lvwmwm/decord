// Module ID: 16126
// Function ID: 16127
// Dependencies: [16127, 16129, 16136, 16159, 16147, 16161, 16157, 16162]

// Module 16126
import _mod16127 from "module_16127" /* 16127 */;
import _mod16129 from "module_16129" /* 16129 */;
import _mod16136 from "module_16136" /* 16136 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16157 from "module_16157" /* 16157 */;
import _mod16159 from "module_16159" /* 16159 */;
import _mod16161 from "module_16161" /* 16161 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16162 */;

if (!_mod16127) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16129(arg0);
    const tmp4 = _mod16136(arg1);
    if (!_mod16159) {
      if (_mod16147(tmp3, tmp4)) {
        const tmpResult = _mod16161;
        const tmpResult2 = _mod16157;
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
