// Module ID: 16796
// Function ID: 16797
// Dependencies: [16797, 16800, 16782, 16804, 16805, 16801]

// Module 16796
import _mod16782 from "module_16782" /* 16782 */;
import _mod16797 from "module_16797" /* 16797 */;
import _mod16801 from "module_16801" /* 16801 */;
import _mod16804 from "module_16804" /* 16804 */;
import _mod16805 from "module_16805" /* 16805 */;
import prop from "module_16800" /* 16800 */;

let tmp2;
let closure_2 = _mod16797("wks");
const _Symbol = _mod16782.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16782.Symbol;
  const tmp3 = _Symbol.for || _mod16782.Symbol;
} else {
  tmp2 = _Symbol && _mod16782.Symbol.withoutSetter || _mod16804;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16805(closure_2, arg0)) {
    if (_mod16801) {
      let tmp6;
      const tmpResult = _mod16805;
      if (tmpResult(_mod16782.Symbol, arg0)) {
        tmp6 = tmp(16782).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
