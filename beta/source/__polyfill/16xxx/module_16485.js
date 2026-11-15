// Module ID: 16485
// Function ID: 16486
// Dependencies: [16486, 16489, 16471, 16493, 16494, 16490]

// Module 16485
import _mod16471 from "module_16471" /* 16471 */;
import _mod16486 from "module_16486" /* 16486 */;
import _mod16490 from "module_16490" /* 16490 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16494 from "module_16494" /* 16494 */;
import prop from "module_16489" /* 16489 */;

let tmp2;
let closure_2 = _mod16486("wks");
const _Symbol = _mod16471.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16471.Symbol;
  const tmp3 = _Symbol.for || _mod16471.Symbol;
} else {
  tmp2 = _Symbol && _mod16471.Symbol.withoutSetter || _mod16493;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16494(closure_2, arg0)) {
    if (_mod16490) {
      let tmp6;
      const tmpResult = _mod16494;
      if (tmpResult(_mod16471.Symbol, arg0)) {
        tmp6 = tmp(16471).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
