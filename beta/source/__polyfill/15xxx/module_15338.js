// Module ID: 15338
// Function ID: 15339
// Dependencies: [15339, 15342, 15324, 15346, 15347, 15343]

// Module 15338
import _mod15324 from "module_15324" /* 15324 */;
import _mod15339 from "module_15339" /* 15339 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15347 from "module_15347" /* 15347 */;
import prop from "module_15342" /* 15342 */;

let tmp2;
let closure_2 = _mod15339("wks");
const _Symbol = _mod15324.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15324.Symbol;
  const tmp3 = _Symbol.for || _mod15324.Symbol;
} else {
  tmp2 = _Symbol && _mod15324.Symbol.withoutSetter || _mod15346;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15347(closure_2, arg0)) {
    if (_mod15343) {
      let tmp6;
      const tmpResult = _mod15347;
      if (tmpResult(_mod15324.Symbol, arg0)) {
        tmp6 = tmp(15324).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
