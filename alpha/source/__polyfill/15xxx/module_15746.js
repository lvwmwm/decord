// Module ID: 15746
// Function ID: 15747
// Dependencies: [15747, 15750, 15732, 15754, 15755, 15751]

// Module 15746
import _mod15732 from "module_15732" /* 15732 */;
import _mod15747 from "module_15747" /* 15747 */;
import _mod15751 from "module_15751" /* 15751 */;
import _mod15754 from "module_15754" /* 15754 */;
import _mod15755 from "module_15755" /* 15755 */;
import prop from "module_15750" /* 15750 */;

let tmp2;
let closure_2 = _mod15747("wks");
const _Symbol = _mod15732.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15732.Symbol;
  const tmp3 = _Symbol.for || _mod15732.Symbol;
} else {
  tmp2 = _Symbol && _mod15732.Symbol.withoutSetter || _mod15754;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15755(closure_2, arg0)) {
    if (_mod15751) {
      let tmp6;
      const tmpResult = _mod15755;
      if (tmpResult(_mod15732.Symbol, arg0)) {
        tmp6 = tmp(15732).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
