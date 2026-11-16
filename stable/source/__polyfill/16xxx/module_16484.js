// Module ID: 16484
// Function ID: 16485
// Dependencies: [16485, 16488, 16470, 16492, 16493, 16489]

// Module 16484
import _mod16470 from "module_16470" /* 16470 */;
import _mod16485 from "module_16485" /* 16485 */;
import _mod16489 from "module_16489" /* 16489 */;
import _mod16492 from "module_16492" /* 16492 */;
import _mod16493 from "module_16493" /* 16493 */;
import prop from "module_16488" /* 16488 */;

let tmp2;
let closure_2 = _mod16485("wks");
const _Symbol = _mod16470.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16470.Symbol;
  const tmp3 = _Symbol.for || _mod16470.Symbol;
} else {
  tmp2 = _Symbol && _mod16470.Symbol.withoutSetter || _mod16492;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16493(closure_2, arg0)) {
    if (_mod16489) {
      let tmp6;
      const tmpResult = _mod16493;
      if (tmpResult(_mod16470.Symbol, arg0)) {
        tmp6 = tmp(16470).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
