// Module ID: 15595
// Function ID: 15596
// Dependencies: [15596, 15599, 15581, 15603, 15604, 15600]

// Module 15595
import _mod15581 from "module_15581" /* 15581 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15600 from "module_15600" /* 15600 */;
import _mod15603 from "module_15603" /* 15603 */;
import _mod15604 from "module_15604" /* 15604 */;
import prop from "module_15599" /* 15599 */;

let tmp2;
let closure_2 = _mod15596("wks");
const _Symbol = _mod15581.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15581.Symbol;
  const tmp3 = _Symbol.for || _mod15581.Symbol;
} else {
  tmp2 = _Symbol && _mod15581.Symbol.withoutSetter || _mod15603;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15604(closure_2, arg0)) {
    if (_mod15600) {
      let tmp6;
      const tmpResult = _mod15604;
      if (tmpResult(_mod15581.Symbol, arg0)) {
        tmp6 = tmp(15581).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
