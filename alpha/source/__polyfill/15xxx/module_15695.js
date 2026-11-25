// Module ID: 15695
// Function ID: 15696
// Dependencies: [15696, 15699, 15681, 15703, 15704, 15700]

// Module 15695
import _mod15681 from "module_15681" /* 15681 */;
import _mod15696 from "module_15696" /* 15696 */;
import _mod15700 from "module_15700" /* 15700 */;
import _mod15703 from "module_15703" /* 15703 */;
import _mod15704 from "module_15704" /* 15704 */;
import prop from "module_15699" /* 15699 */;

let tmp2;
let closure_2 = _mod15696("wks");
const _Symbol = _mod15681.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15681.Symbol;
  const tmp3 = _Symbol.for || _mod15681.Symbol;
} else {
  tmp2 = _Symbol && _mod15681.Symbol.withoutSetter || _mod15703;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15704(closure_2, arg0)) {
    if (_mod15700) {
      let tmp6;
      const tmpResult = _mod15704;
      if (tmpResult(_mod15681.Symbol, arg0)) {
        tmp6 = tmp(15681).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
