// Module ID: 15479
// Function ID: 15480
// Dependencies: [15480, 15483, 15465, 15487, 15488, 15484]

// Module 15479
import _mod15465 from "module_15465" /* 15465 */;
import _mod15480 from "module_15480" /* 15480 */;
import _mod15484 from "module_15484" /* 15484 */;
import _mod15487 from "module_15487" /* 15487 */;
import _mod15488 from "module_15488" /* 15488 */;
import prop from "module_15483" /* 15483 */;

let tmp2;
let closure_2 = _mod15480("wks");
const _Symbol = _mod15465.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15465.Symbol;
  const tmp3 = _Symbol.for || _mod15465.Symbol;
} else {
  tmp2 = _Symbol && _mod15465.Symbol.withoutSetter || _mod15487;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15488(closure_2, arg0)) {
    if (_mod15484) {
      let tmp6;
      const tmpResult = _mod15488;
      if (tmpResult(_mod15465.Symbol, arg0)) {
        tmp6 = tmp(15465).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
