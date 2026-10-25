// Module ID: 15559
// Function ID: 15560
// Dependencies: [15560, 15563, 15545, 15567, 15568, 15564]

// Module 15559
import _mod15545 from "module_15545" /* 15545 */;
import _mod15560 from "module_15560" /* 15560 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15568 from "module_15568" /* 15568 */;
import prop from "module_15563" /* 15563 */;

let tmp2;
let closure_2 = _mod15560("wks");
const _Symbol = _mod15545.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15545.Symbol;
  const tmp3 = _Symbol.for || _mod15545.Symbol;
} else {
  tmp2 = _Symbol && _mod15545.Symbol.withoutSetter || _mod15567;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15568(closure_2, arg0)) {
    if (_mod15564) {
      let tmp6;
      const tmpResult = _mod15568;
      if (tmpResult(_mod15545.Symbol, arg0)) {
        tmp6 = tmp(15545).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
