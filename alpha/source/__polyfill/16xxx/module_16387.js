// Module ID: 16387
// Function ID: 16388
// Dependencies: [16388, 16391, 16373, 16395, 16396, 16392]

// Module 16387
import _mod16373 from "module_16373" /* 16373 */;
import _mod16388 from "module_16388" /* 16388 */;
import _mod16392 from "module_16392" /* 16392 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16396 from "module_16396" /* 16396 */;
import prop from "module_16391" /* 16391 */;

let tmp2;
let closure_2 = _mod16388("wks");
const _Symbol = _mod16373.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16373.Symbol;
  const tmp3 = _Symbol.for || _mod16373.Symbol;
} else {
  tmp2 = _Symbol && _mod16373.Symbol.withoutSetter || _mod16395;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16396(closure_2, arg0)) {
    if (_mod16392) {
      let tmp6;
      const tmpResult = _mod16396;
      if (tmpResult(_mod16373.Symbol, arg0)) {
        tmp6 = tmp(16373).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
