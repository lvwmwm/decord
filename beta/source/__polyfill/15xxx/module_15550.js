// Module ID: 15550
// Function ID: 15551
// Dependencies: [15551, 15554, 15536, 15558, 15559, 15555]

// Module 15550
import _mod15536 from "module_15536" /* 15536 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15558 from "module_15558" /* 15558 */;
import _mod15559 from "module_15559" /* 15559 */;
import prop from "module_15554" /* 15554 */;

let tmp2;
let closure_2 = _mod15551("wks");
const _Symbol = _mod15536.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15536.Symbol;
  const tmp3 = _Symbol.for || _mod15536.Symbol;
} else {
  tmp2 = _Symbol && _mod15536.Symbol.withoutSetter || _mod15558;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15559(closure_2, arg0)) {
    if (_mod15555) {
      let tmp6;
      const tmpResult = _mod15559;
      if (tmpResult(_mod15536.Symbol, arg0)) {
        tmp6 = tmp(15536).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
