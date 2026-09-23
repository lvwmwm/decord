// Module ID: 14665
// Function ID: 14666
// Dependencies: [14666, 14668, 14675, 14698, 14686, 14700, 14696, 14701]

// Module 14665
import _mod14666 from "module_14666" /* 14666 */;
import _mod14668 from "module_14668" /* 14668 */;
import text from "text" /* 14675 */;
import _mod14698 from "module_14698" /* 14698 */;

if (!_mod14666) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14668(arg0);
    const tmp4 = text(arg1);
    if (!_mod14698) {
      if (tmp(14686)(tmp3, tmp4)) {
        const tmpResult = tmp(14700);
        return tmpResult(!tmp(14696)(tmp(14701).f, tmp3, tmp4), tmp3[tmp4]);
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
