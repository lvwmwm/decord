// Module ID: 16285
// Function ID: 16286
// Dependencies: [16286, 16289, 16271, 16293, 16294, 16290]

// Module 16285
import _mod16271 from "module_16271" /* 16271 */;
import _mod16286 from "module_16286" /* 16286 */;
import _mod16290 from "module_16290" /* 16290 */;
import _mod16293 from "module_16293" /* 16293 */;
import _mod16294 from "module_16294" /* 16294 */;
import prop from "module_16289" /* 16289 */;

let tmp2;
let closure_2 = _mod16286("wks");
const _Symbol = _mod16271.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16271.Symbol;
  const tmp3 = _Symbol.for || _mod16271.Symbol;
} else {
  tmp2 = _Symbol && _mod16271.Symbol.withoutSetter || _mod16293;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16294(closure_2, arg0)) {
    if (_mod16290) {
      let tmp6;
      const tmpResult = _mod16294;
      if (tmpResult(_mod16271.Symbol, arg0)) {
        tmp6 = tmp(16271).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
