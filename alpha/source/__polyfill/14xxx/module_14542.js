// Module ID: 14542
// Function ID: 14543
// Dependencies: [14543, 14546, 14528, 14550, 14551, 14547]

// Module 14542
import _mod14528 from "module_14528" /* 14528 */;
import _mod14543 from "module_14543" /* 14543 */;
import _mod14547 from "module_14547" /* 14547 */;
import _mod14550 from "module_14550" /* 14550 */;
import _mod14551 from "module_14551" /* 14551 */;
import prop from "module_14546" /* 14546 */;

let tmp2;
let closure_2 = _mod14543("wks");
const _Symbol = _mod14528.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14528.Symbol;
  const tmp3 = _Symbol.for || _mod14528.Symbol;
} else {
  tmp2 = _Symbol && _mod14528.Symbol.withoutSetter || _mod14550;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14551(closure_2, arg0)) {
    if (_mod14547) {
      let tmp6;
      const tmpResult = _mod14551;
      if (tmpResult(_mod14528.Symbol, arg0)) {
        tmp6 = tmp(14528).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
