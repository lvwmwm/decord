// Module ID: 15564
// Function ID: 15565
// Dependencies: [15565, 15568, 15550, 15572, 15573, 15569]

// Module 15564
import _mod15550 from "module_15550" /* 15550 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15573 from "module_15573" /* 15573 */;
import prop from "module_15568" /* 15568 */;

let tmp2;
let closure_2 = _mod15565("wks");
const _Symbol = _mod15550.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15550.Symbol;
  const tmp3 = _Symbol.for || _mod15550.Symbol;
} else {
  tmp2 = _Symbol && _mod15550.Symbol.withoutSetter || _mod15572;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15573(closure_2, arg0)) {
    if (_mod15569) {
      let tmp6;
      const tmpResult = _mod15573;
      if (tmpResult(_mod15550.Symbol, arg0)) {
        tmp6 = tmp(15550).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
