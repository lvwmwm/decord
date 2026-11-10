// Module ID: 16482
// Function ID: 16483
// Dependencies: [16483, 16486, 16468, 16490, 16491, 16487]

// Module 16482
import _mod16468 from "module_16468" /* 16468 */;
import _mod16483 from "module_16483" /* 16483 */;
import _mod16487 from "module_16487" /* 16487 */;
import _mod16490 from "module_16490" /* 16490 */;
import _mod16491 from "module_16491" /* 16491 */;
import prop from "module_16486" /* 16486 */;

let tmp2;
let closure_2 = _mod16483("wks");
const _Symbol = _mod16468.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16468.Symbol;
  const tmp3 = _Symbol.for || _mod16468.Symbol;
} else {
  tmp2 = _Symbol && _mod16468.Symbol.withoutSetter || _mod16490;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16491(closure_2, arg0)) {
    if (_mod16487) {
      let tmp6;
      const tmpResult = _mod16491;
      if (tmpResult(_mod16468.Symbol, arg0)) {
        tmp6 = tmp(16468).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
