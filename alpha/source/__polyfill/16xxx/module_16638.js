// Module ID: 16638
// Function ID: 16639
// Dependencies: [16639, 16642, 16624, 16646, 16647, 16643]

// Module 16638
import _mod16624 from "module_16624" /* 16624 */;
import _mod16639 from "module_16639" /* 16639 */;
import _mod16643 from "module_16643" /* 16643 */;
import _mod16646 from "module_16646" /* 16646 */;
import _mod16647 from "module_16647" /* 16647 */;
import prop from "module_16642" /* 16642 */;

let tmp2;
let closure_2 = _mod16639("wks");
const _Symbol = _mod16624.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16624.Symbol;
  const tmp3 = _Symbol.for || _mod16624.Symbol;
} else {
  tmp2 = _Symbol && _mod16624.Symbol.withoutSetter || _mod16646;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16647(closure_2, arg0)) {
    if (_mod16643) {
      let tmp6;
      const tmpResult = _mod16647;
      if (tmpResult(_mod16624.Symbol, arg0)) {
        tmp6 = tmp(16624).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
