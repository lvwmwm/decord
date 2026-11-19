// Module ID: 15465
// Function ID: 15466
// Dependencies: [15466, 15469, 15451, 15473, 15474, 15470]

// Module 15465
import _mod15451 from "module_15451" /* 15451 */;
import _mod15466 from "module_15466" /* 15466 */;
import _mod15470 from "module_15470" /* 15470 */;
import _mod15473 from "module_15473" /* 15473 */;
import _mod15474 from "module_15474" /* 15474 */;
import prop from "module_15469" /* 15469 */;

let tmp2;
let closure_2 = _mod15466("wks");
const _Symbol = _mod15451.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15451.Symbol;
  const tmp3 = _Symbol.for || _mod15451.Symbol;
} else {
  tmp2 = _Symbol && _mod15451.Symbol.withoutSetter || _mod15473;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15474(closure_2, arg0)) {
    if (_mod15470) {
      let tmp6;
      const tmpResult = _mod15474;
      if (tmpResult(_mod15451.Symbol, arg0)) {
        tmp6 = tmp(15451).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
