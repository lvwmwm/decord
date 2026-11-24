// Module ID: 15573
// Function ID: 15574
// Dependencies: [15574, 15577, 15559, 15581, 15582, 15578]

// Module 15573
import _mod15559 from "module_15559" /* 15559 */;
import _mod15574 from "module_15574" /* 15574 */;
import _mod15578 from "module_15578" /* 15578 */;
import _mod15581 from "module_15581" /* 15581 */;
import _mod15582 from "module_15582" /* 15582 */;
import prop from "module_15577" /* 15577 */;

let tmp2;
let closure_2 = _mod15574("wks");
const _Symbol = _mod15559.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15559.Symbol;
  const tmp3 = _Symbol.for || _mod15559.Symbol;
} else {
  tmp2 = _Symbol && _mod15559.Symbol.withoutSetter || _mod15581;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15582(closure_2, arg0)) {
    if (_mod15578) {
      let tmp6;
      const tmpResult = _mod15582;
      if (tmpResult(_mod15559.Symbol, arg0)) {
        tmp6 = tmp(15559).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
