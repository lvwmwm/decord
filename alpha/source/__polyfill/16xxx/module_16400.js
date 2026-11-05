// Module ID: 16400
// Function ID: 16401
// Dependencies: [16401, 16404, 16386, 16408, 16409, 16405]

// Module 16400
import _mod16386 from "module_16386" /* 16386 */;
import _mod16401 from "module_16401" /* 16401 */;
import _mod16405 from "module_16405" /* 16405 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16409 from "module_16409" /* 16409 */;
import prop from "module_16404" /* 16404 */;

let tmp2;
let closure_2 = _mod16401("wks");
const _Symbol = _mod16386.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16386.Symbol;
  const tmp3 = _Symbol.for || _mod16386.Symbol;
} else {
  tmp2 = _Symbol && _mod16386.Symbol.withoutSetter || _mod16408;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16409(closure_2, arg0)) {
    if (_mod16405) {
      let tmp6;
      const tmpResult = _mod16409;
      if (tmpResult(_mod16386.Symbol, arg0)) {
        tmp6 = tmp(16386).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
