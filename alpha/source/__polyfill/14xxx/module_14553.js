// Module ID: 14553
// Function ID: 14554
// Dependencies: [14554, 14556, 14563, 14586, 14574, 14588, 14584, 14589]

// Module 14553
import _mod14554 from "module_14554" /* 14554 */;
import _mod14556 from "module_14556" /* 14556 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14574 from "module_14574" /* 14574 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14588 from "module_14588" /* 14588 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14589 */;

if (!_mod14554) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14556(arg0);
    const tmp4 = _mod14563(arg1);
    if (!_mod14586) {
      if (_mod14574(tmp3, tmp4)) {
        const tmpResult = _mod14588;
        const tmpResult2 = _mod14584;
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
