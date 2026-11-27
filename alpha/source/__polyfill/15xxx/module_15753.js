// Module ID: 15753
// Function ID: 15754
// Dependencies: [15754, 15757, 15739, 15761, 15762, 15758]

// Module 15753
import _mod15739 from "module_15739" /* 15739 */;
import _mod15754 from "module_15754" /* 15754 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15761 from "module_15761" /* 15761 */;
import _mod15762 from "module_15762" /* 15762 */;
import prop from "module_15757" /* 15757 */;

let tmp2;
let closure_2 = _mod15754("wks");
const _Symbol = _mod15739.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15739.Symbol;
  const tmp3 = _Symbol.for || _mod15739.Symbol;
} else {
  tmp2 = _Symbol && _mod15739.Symbol.withoutSetter || _mod15761;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15762(closure_2, arg0)) {
    if (_mod15758) {
      let tmp6;
      const tmpResult = _mod15762;
      if (tmpResult(_mod15739.Symbol, arg0)) {
        tmp6 = tmp(15739).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
