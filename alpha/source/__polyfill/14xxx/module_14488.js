// Module ID: 14488
// Function ID: 14489
// Dependencies: [14489, 14492, 14474, 14496, 14497, 14493]

// Module 14488
import _mod14474 from "module_14474" /* 14474 */;
import _mod14489 from "module_14489" /* 14489 */;
import _mod14493 from "module_14493" /* 14493 */;
import _mod14496 from "module_14496" /* 14496 */;
import _mod14497 from "module_14497" /* 14497 */;
import prop from "module_14492" /* 14492 */;

let tmp2;
let closure_2 = _mod14489("wks");
const _Symbol = _mod14474.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14474.Symbol;
  const tmp3 = _Symbol.for || _mod14474.Symbol;
} else {
  tmp2 = _Symbol && _mod14474.Symbol.withoutSetter || _mod14496;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14497(closure_2, arg0)) {
    if (_mod14493) {
      let tmp6;
      const tmpResult = _mod14497;
      if (tmpResult(_mod14474.Symbol, arg0)) {
        tmp6 = tmp(14474).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
