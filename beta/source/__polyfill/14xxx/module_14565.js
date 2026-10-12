// Module ID: 14565
// Function ID: 14566
// Dependencies: [14566, 14569, 14551, 14573, 14574, 14570]

// Module 14565
import _mod14551 from "module_14551" /* 14551 */;
import _mod14566 from "module_14566" /* 14566 */;
import _mod14570 from "module_14570" /* 14570 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14574 from "module_14574" /* 14574 */;
import prop from "module_14569" /* 14569 */;

let tmp2;
let closure_2 = _mod14566("wks");
const _Symbol = _mod14551.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14551.Symbol;
  const tmp3 = _Symbol.for || _mod14551.Symbol;
} else {
  tmp2 = _Symbol && _mod14551.Symbol.withoutSetter || _mod14573;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14574(closure_2, arg0)) {
    if (_mod14570) {
      let tmp6;
      const tmpResult = _mod14574;
      if (tmpResult(_mod14551.Symbol, arg0)) {
        tmp6 = tmp(14551).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
