// Module ID: 15500
// Function ID: 15501
// Dependencies: [15501, 15504, 15486, 15508, 15509, 15505]

// Module 15500
import _mod15486 from "module_15486" /* 15486 */;
import _mod15501 from "module_15501" /* 15501 */;
import _mod15505 from "module_15505" /* 15505 */;
import _mod15508 from "module_15508" /* 15508 */;
import _mod15509 from "module_15509" /* 15509 */;
import prop from "module_15504" /* 15504 */;

let tmp2;
let closure_2 = _mod15501("wks");
const _Symbol = _mod15486.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15486.Symbol;
  const tmp3 = _Symbol.for || _mod15486.Symbol;
} else {
  tmp2 = _Symbol && _mod15486.Symbol.withoutSetter || _mod15508;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15509(closure_2, arg0)) {
    if (_mod15505) {
      let tmp6;
      const tmpResult = _mod15509;
      if (tmpResult(_mod15486.Symbol, arg0)) {
        tmp6 = tmp(15486).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
