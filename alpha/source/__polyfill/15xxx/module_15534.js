// Module ID: 15534
// Function ID: 15535
// Dependencies: [15535, 15538, 15520, 15542, 15543, 15539]

// Module 15534
import _mod15520 from "module_15520" /* 15520 */;
import _mod15535 from "module_15535" /* 15535 */;
import _mod15539 from "module_15539" /* 15539 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15543 from "module_15543" /* 15543 */;
import prop from "module_15538" /* 15538 */;

let tmp2;
let closure_2 = _mod15535("wks");
const _Symbol = _mod15520.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15520.Symbol;
  const tmp3 = _Symbol.for || _mod15520.Symbol;
} else {
  tmp2 = _Symbol && _mod15520.Symbol.withoutSetter || _mod15542;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15543(closure_2, arg0)) {
    if (_mod15539) {
      let tmp6;
      const tmpResult = _mod15543;
      if (tmpResult(_mod15520.Symbol, arg0)) {
        tmp6 = tmp(15520).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
