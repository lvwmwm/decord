// Module ID: 16761
// Function ID: 16762
// Dependencies: [16762, 16765, 16747, 16769, 16770, 16766]

// Module 16761
import _mod16747 from "module_16747" /* 16747 */;
import _mod16762 from "module_16762" /* 16762 */;
import _mod16766 from "module_16766" /* 16766 */;
import _mod16769 from "module_16769" /* 16769 */;
import _mod16770 from "module_16770" /* 16770 */;
import prop from "module_16765" /* 16765 */;

let tmp2;
let closure_2 = _mod16762("wks");
const _Symbol = _mod16747.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16747.Symbol;
  const tmp3 = _Symbol.for || _mod16747.Symbol;
} else {
  tmp2 = _Symbol && _mod16747.Symbol.withoutSetter || _mod16769;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16770(closure_2, arg0)) {
    if (_mod16766) {
      let tmp6;
      const tmpResult = _mod16770;
      if (tmpResult(_mod16747.Symbol, arg0)) {
        tmp6 = tmp(16747).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
