// Module ID: 16643
// Function ID: 16644
// Dependencies: [16644, 16647, 16629, 16651, 16652, 16648]

// Module 16643
import _mod16629 from "module_16629" /* 16629 */;
import _mod16644 from "module_16644" /* 16644 */;
import _mod16648 from "module_16648" /* 16648 */;
import _mod16651 from "module_16651" /* 16651 */;
import _mod16652 from "module_16652" /* 16652 */;
import prop from "module_16647" /* 16647 */;

let tmp2;
let closure_2 = _mod16644("wks");
const _Symbol = _mod16629.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16629.Symbol;
  const tmp3 = _Symbol.for || _mod16629.Symbol;
} else {
  tmp2 = _Symbol && _mod16629.Symbol.withoutSetter || _mod16651;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16652(closure_2, arg0)) {
    if (_mod16648) {
      let tmp6;
      const tmpResult = _mod16652;
      if (tmpResult(_mod16629.Symbol, arg0)) {
        tmp6 = tmp(16629).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
