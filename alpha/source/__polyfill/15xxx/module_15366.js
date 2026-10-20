// Module ID: 15366
// Function ID: 15367
// Dependencies: [15367, 15370, 15352, 15374, 15375, 15371]

// Module 15366
import _mod15352 from "module_15352" /* 15352 */;
import _mod15367 from "module_15367" /* 15367 */;
import _mod15371 from "module_15371" /* 15371 */;
import _mod15374 from "module_15374" /* 15374 */;
import _mod15375 from "module_15375" /* 15375 */;
import prop from "module_15370" /* 15370 */;

let tmp2;
let closure_2 = _mod15367("wks");
const _Symbol = _mod15352.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15352.Symbol;
  const tmp3 = _Symbol.for || _mod15352.Symbol;
} else {
  tmp2 = _Symbol && _mod15352.Symbol.withoutSetter || _mod15374;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15375(closure_2, arg0)) {
    if (_mod15371) {
      let tmp6;
      const tmpResult = _mod15375;
      if (tmpResult(_mod15352.Symbol, arg0)) {
        tmp6 = tmp(15352).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
