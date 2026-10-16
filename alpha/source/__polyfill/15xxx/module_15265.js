// Module ID: 15265
// Function ID: 15266
// Dependencies: [15266, 15269, 15251, 15273, 15274, 15270]

// Module 15265
import _mod15251 from "module_15251" /* 15251 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15270 from "module_15270" /* 15270 */;
import _mod15273 from "module_15273" /* 15273 */;
import _mod15274 from "module_15274" /* 15274 */;
import prop from "module_15269" /* 15269 */;

let tmp2;
let closure_2 = _mod15266("wks");
const _Symbol = _mod15251.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15251.Symbol;
  const tmp3 = _Symbol.for || _mod15251.Symbol;
} else {
  tmp2 = _Symbol && _mod15251.Symbol.withoutSetter || _mod15273;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15274(closure_2, arg0)) {
    if (_mod15270) {
      let tmp6;
      const tmpResult = _mod15274;
      if (tmpResult(_mod15251.Symbol, arg0)) {
        tmp6 = tmp(15251).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
