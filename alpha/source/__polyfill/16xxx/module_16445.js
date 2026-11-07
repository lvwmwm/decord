// Module ID: 16445
// Function ID: 16446
// Dependencies: [16446, 16449, 16431, 16453, 16454, 16450]

// Module 16445
import _mod16431 from "module_16431" /* 16431 */;
import _mod16446 from "module_16446" /* 16446 */;
import _mod16450 from "module_16450" /* 16450 */;
import _mod16453 from "module_16453" /* 16453 */;
import _mod16454 from "module_16454" /* 16454 */;
import prop from "module_16449" /* 16449 */;

let tmp2;
let closure_2 = _mod16446("wks");
const _Symbol = _mod16431.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16431.Symbol;
  const tmp3 = _Symbol.for || _mod16431.Symbol;
} else {
  tmp2 = _Symbol && _mod16431.Symbol.withoutSetter || _mod16453;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16454(closure_2, arg0)) {
    if (_mod16450) {
      let tmp6;
      const tmpResult = _mod16454;
      if (tmpResult(_mod16431.Symbol, arg0)) {
        tmp6 = tmp(16431).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
