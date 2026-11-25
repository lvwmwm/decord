// Module ID: 15560
// Function ID: 15561
// Dependencies: [15561, 15564, 15546, 15568, 15569, 15565]

// Module 15560
import _mod15546 from "module_15546" /* 15546 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15568 from "module_15568" /* 15568 */;
import _mod15569 from "module_15569" /* 15569 */;
import prop from "module_15564" /* 15564 */;

let tmp2;
let closure_2 = _mod15561("wks");
const _Symbol = _mod15546.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15546.Symbol;
  const tmp3 = _Symbol.for || _mod15546.Symbol;
} else {
  tmp2 = _Symbol && _mod15546.Symbol.withoutSetter || _mod15568;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15569(closure_2, arg0)) {
    if (_mod15565) {
      let tmp6;
      const tmpResult = _mod15569;
      if (tmpResult(_mod15546.Symbol, arg0)) {
        tmp6 = tmp(15546).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
