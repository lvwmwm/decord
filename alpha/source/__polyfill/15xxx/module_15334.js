// Module ID: 15334
// Function ID: 15335
// Dependencies: [15335, 15338, 15320, 15342, 15343, 15339]

// Module 15334
import _mod15320 from "module_15320" /* 15320 */;
import _mod15335 from "module_15335" /* 15335 */;
import _mod15339 from "module_15339" /* 15339 */;
import _mod15342 from "module_15342" /* 15342 */;
import _mod15343 from "module_15343" /* 15343 */;
import prop from "module_15338" /* 15338 */;

let tmp2;
let closure_2 = _mod15335("wks");
const _Symbol = _mod15320.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15320.Symbol;
  const tmp3 = _Symbol.for || _mod15320.Symbol;
} else {
  tmp2 = _Symbol && _mod15320.Symbol.withoutSetter || _mod15342;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15343(closure_2, arg0)) {
    if (_mod15339) {
      let tmp6;
      const tmpResult = _mod15343;
      if (tmpResult(_mod15320.Symbol, arg0)) {
        tmp6 = tmp(15320).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
