// Module ID: 15554
// Function ID: 15555
// Dependencies: [15555, 15558, 15540, 15562, 15563, 15559]

// Module 15554
import _mod15540 from "module_15540" /* 15540 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15563 from "module_15563" /* 15563 */;
import prop from "module_15558" /* 15558 */;

let tmp2;
let closure_2 = _mod15555("wks");
const _Symbol = _mod15540.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15540.Symbol;
  const tmp3 = _Symbol.for || _mod15540.Symbol;
} else {
  tmp2 = _Symbol && _mod15540.Symbol.withoutSetter || _mod15562;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15563(closure_2, arg0)) {
    if (_mod15559) {
      let tmp6;
      const tmpResult = _mod15563;
      if (tmpResult(_mod15540.Symbol, arg0)) {
        tmp6 = tmp(15540).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
