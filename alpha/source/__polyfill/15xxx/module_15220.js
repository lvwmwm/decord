// Module ID: 15220
// Function ID: 15221
// Dependencies: [15221, 15224, 15206, 15228, 15229, 15225]

// Module 15220
import _mod15206 from "module_15206" /* 15206 */;
import _mod15221 from "module_15221" /* 15221 */;
import _mod15225 from "module_15225" /* 15225 */;
import _mod15228 from "module_15228" /* 15228 */;
import _mod15229 from "module_15229" /* 15229 */;
import prop from "module_15224" /* 15224 */;

let tmp2;
let closure_2 = _mod15221("wks");
const _Symbol = _mod15206.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15206.Symbol;
  const tmp3 = _Symbol.for || _mod15206.Symbol;
} else {
  tmp2 = _Symbol && _mod15206.Symbol.withoutSetter || _mod15228;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15229(closure_2, arg0)) {
    if (_mod15225) {
      let tmp6;
      const tmpResult = _mod15229;
      if (tmpResult(_mod15206.Symbol, arg0)) {
        tmp6 = tmp(15206).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
