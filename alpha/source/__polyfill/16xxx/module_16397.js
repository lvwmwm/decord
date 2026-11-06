// Module ID: 16397
// Function ID: 16398
// Dependencies: [16398, 16401, 16383, 16405, 16406, 16402]

// Module 16397
import _mod16383 from "module_16383" /* 16383 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16402 from "module_16402" /* 16402 */;
import _mod16405 from "module_16405" /* 16405 */;
import _mod16406 from "module_16406" /* 16406 */;
import prop from "module_16401" /* 16401 */;

let tmp2;
let closure_2 = _mod16398("wks");
const _Symbol = _mod16383.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16383.Symbol;
  const tmp3 = _Symbol.for || _mod16383.Symbol;
} else {
  tmp2 = _Symbol && _mod16383.Symbol.withoutSetter || _mod16405;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16406(closure_2, arg0)) {
    if (_mod16402) {
      let tmp6;
      const tmpResult = _mod16406;
      if (tmpResult(_mod16383.Symbol, arg0)) {
        tmp6 = tmp(16383).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
