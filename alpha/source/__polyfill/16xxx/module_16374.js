// Module ID: 16374
// Function ID: 16375
// Dependencies: [16375, 16378, 16360, 16382, 16383, 16379]

// Module 16374
import _mod16360 from "module_16360" /* 16360 */;
import _mod16375 from "module_16375" /* 16375 */;
import _mod16379 from "module_16379" /* 16379 */;
import _mod16382 from "module_16382" /* 16382 */;
import _mod16383 from "module_16383" /* 16383 */;
import prop from "module_16378" /* 16378 */;

let tmp2;
let closure_2 = _mod16375("wks");
const _Symbol = _mod16360.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16360.Symbol;
  const tmp3 = _Symbol.for || _mod16360.Symbol;
} else {
  tmp2 = _Symbol && _mod16360.Symbol.withoutSetter || _mod16382;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16383(closure_2, arg0)) {
    if (_mod16379) {
      let tmp6;
      const tmpResult = _mod16383;
      if (tmpResult(_mod16360.Symbol, arg0)) {
        tmp6 = tmp(16360).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
