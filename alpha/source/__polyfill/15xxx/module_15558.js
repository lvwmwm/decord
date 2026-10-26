// Module ID: 15558
// Function ID: 15559
// Dependencies: [15559, 15562, 15544, 15566, 15567, 15563]

// Module 15558
import _mod15544 from "module_15544" /* 15544 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15567 from "module_15567" /* 15567 */;
import prop from "module_15562" /* 15562 */;

let tmp2;
let closure_2 = _mod15559("wks");
const _Symbol = _mod15544.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15544.Symbol;
  const tmp3 = _Symbol.for || _mod15544.Symbol;
} else {
  tmp2 = _Symbol && _mod15544.Symbol.withoutSetter || _mod15566;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15567(closure_2, arg0)) {
    if (_mod15563) {
      let tmp6;
      const tmpResult = _mod15567;
      if (tmpResult(_mod15544.Symbol, arg0)) {
        tmp6 = tmp(15544).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
