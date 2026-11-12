// Module ID: 16487
// Function ID: 16488
// Dependencies: [16488, 16491, 16473, 16495, 16496, 16492]

// Module 16487
import _mod16473 from "module_16473" /* 16473 */;
import _mod16488 from "module_16488" /* 16488 */;
import _mod16492 from "module_16492" /* 16492 */;
import _mod16495 from "module_16495" /* 16495 */;
import _mod16496 from "module_16496" /* 16496 */;
import prop from "module_16491" /* 16491 */;

let tmp2;
let closure_2 = _mod16488("wks");
const _Symbol = _mod16473.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16473.Symbol;
  const tmp3 = _Symbol.for || _mod16473.Symbol;
} else {
  tmp2 = _Symbol && _mod16473.Symbol.withoutSetter || _mod16495;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16496(closure_2, arg0)) {
    if (_mod16492) {
      let tmp6;
      const tmpResult = _mod16496;
      if (tmpResult(_mod16473.Symbol, arg0)) {
        tmp6 = tmp(16473).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
