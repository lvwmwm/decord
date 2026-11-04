// Module ID: 16142
// Function ID: 16143
// Dependencies: [16143, 16146, 16128, 16150, 16151, 16147]

// Module 16142
import _mod16128 from "module_16128" /* 16128 */;
import _mod16143 from "module_16143" /* 16143 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16151 from "module_16151" /* 16151 */;
import prop from "module_16146" /* 16146 */;

let tmp2;
let closure_2 = _mod16143("wks");
const _Symbol = _mod16128.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16128.Symbol;
  const tmp3 = _Symbol.for || _mod16128.Symbol;
} else {
  tmp2 = _Symbol && _mod16128.Symbol.withoutSetter || _mod16150;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16151(closure_2, arg0)) {
    if (_mod16147) {
      let tmp6;
      const tmpResult = _mod16151;
      if (tmpResult(_mod16128.Symbol, arg0)) {
        tmp6 = tmp(16128).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
