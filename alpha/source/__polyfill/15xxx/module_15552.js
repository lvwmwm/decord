// Module ID: 15552
// Function ID: 15553
// Dependencies: [15553, 15556, 15538, 15560, 15561, 15557]

// Module 15552
import _mod15538 from "module_15538" /* 15538 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15560 from "module_15560" /* 15560 */;
import _mod15561 from "module_15561" /* 15561 */;
import prop from "module_15556" /* 15556 */;

let tmp2;
let closure_2 = _mod15553("wks");
const _Symbol = _mod15538.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15538.Symbol;
  const tmp3 = _Symbol.for || _mod15538.Symbol;
} else {
  tmp2 = _Symbol && _mod15538.Symbol.withoutSetter || _mod15560;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15561(closure_2, arg0)) {
    if (_mod15557) {
      let tmp6;
      const tmpResult = _mod15561;
      if (tmpResult(_mod15538.Symbol, arg0)) {
        tmp6 = tmp(15538).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
