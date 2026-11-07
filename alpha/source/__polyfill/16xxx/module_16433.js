// Module ID: 16433
// Function ID: 16434
// Dependencies: [16434, 16436, 16443, 16466, 16454, 16468, 16464, 16469]

// Module 16433
import _mod16434 from "module_16434" /* 16434 */;
import _mod16436 from "module_16436" /* 16436 */;
import _mod16443 from "module_16443" /* 16443 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16466 from "module_16466" /* 16466 */;
import _mod16468 from "module_16468" /* 16468 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 16469 */;

if (!_mod16434) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16436(arg0);
    const tmp4 = _mod16443(arg1);
    if (!_mod16466) {
      if (_mod16454(tmp3, tmp4)) {
        const tmpResult = _mod16468;
        const tmpResult2 = _mod16464;
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
