// Module ID: 16057
// Function ID: 16058
// Dependencies: [16058, 16061, 16043, 16065, 16066, 16062]

// Module 16057
import _mod16043 from "module_16043" /* 16043 */;
import _mod16058 from "module_16058" /* 16058 */;
import _mod16062 from "module_16062" /* 16062 */;
import _mod16065 from "module_16065" /* 16065 */;
import _mod16066 from "module_16066" /* 16066 */;
import prop from "module_16061" /* 16061 */;

let tmp2;
let closure_2 = _mod16058("wks");
const _Symbol = _mod16043.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16043.Symbol;
  const tmp3 = _Symbol.for || _mod16043.Symbol;
} else {
  tmp2 = _Symbol && _mod16043.Symbol.withoutSetter || _mod16065;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16066(closure_2, arg0)) {
    if (_mod16062) {
      let tmp6;
      const tmpResult = _mod16066;
      if (tmpResult(_mod16043.Symbol, arg0)) {
        tmp6 = tmp(16043).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
