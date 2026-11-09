// Module ID: 16455
// Function ID: 16456
// Dependencies: [16456, 16459, 16441, 16463, 16464, 16460]

// Module 16455
import _mod16441 from "module_16441" /* 16441 */;
import _mod16456 from "module_16456" /* 16456 */;
import _mod16460 from "module_16460" /* 16460 */;
import _mod16463 from "module_16463" /* 16463 */;
import _mod16464 from "module_16464" /* 16464 */;
import prop from "module_16459" /* 16459 */;

let tmp2;
let closure_2 = _mod16456("wks");
const _Symbol = _mod16441.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16441.Symbol;
  const tmp3 = _Symbol.for || _mod16441.Symbol;
} else {
  tmp2 = _Symbol && _mod16441.Symbol.withoutSetter || _mod16463;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16464(closure_2, arg0)) {
    if (_mod16460) {
      let tmp6;
      const tmpResult = _mod16464;
      if (tmpResult(_mod16441.Symbol, arg0)) {
        tmp6 = tmp(16441).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
