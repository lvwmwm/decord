// Module ID: 14392
// Function ID: 14393
// Dependencies: [14393, 14396, 14378, 14400, 14401, 14397]

// Module 14392
import _mod14378 from "module_14378" /* 14378 */;
import _mod14393 from "module_14393" /* 14393 */;
import _mod14397 from "module_14397" /* 14397 */;
import _mod14400 from "module_14400" /* 14400 */;
import _mod14401 from "module_14401" /* 14401 */;
import prop from "module_14396" /* 14396 */;

let tmp2;
let closure_2 = _mod14393("wks");
const _Symbol = _mod14378.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14378.Symbol;
  const tmp3 = _Symbol.for || _mod14378.Symbol;
} else {
  tmp2 = _Symbol && _mod14378.Symbol.withoutSetter || _mod14400;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14401(closure_2, arg0)) {
    if (_mod14397) {
      let tmp6;
      const tmpResult = _mod14401;
      if (tmpResult(_mod14378.Symbol, arg0)) {
        tmp6 = tmp(14378).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
