// Module ID: 15384
// Function ID: 15385
// Dependencies: [15385, 15388, 15370, 15392, 15393, 15389]

// Module 15384
import _mod15370 from "module_15370" /* 15370 */;
import _mod15385 from "module_15385" /* 15385 */;
import _mod15389 from "module_15389" /* 15389 */;
import _mod15392 from "module_15392" /* 15392 */;
import _mod15393 from "module_15393" /* 15393 */;
import prop from "module_15388" /* 15388 */;

let tmp2;
let closure_2 = _mod15385("wks");
const _Symbol = _mod15370.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15370.Symbol;
  const tmp3 = _Symbol.for || _mod15370.Symbol;
} else {
  tmp2 = _Symbol && _mod15370.Symbol.withoutSetter || _mod15392;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15393(closure_2, arg0)) {
    if (_mod15389) {
      let tmp6;
      const tmpResult = _mod15393;
      if (tmpResult(_mod15370.Symbol, arg0)) {
        tmp6 = tmp(15370).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
