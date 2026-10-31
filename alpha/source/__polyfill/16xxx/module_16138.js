// Module ID: 16138
// Function ID: 16139
// Dependencies: [16139, 16142, 16124, 16146, 16147, 16143]

// Module 16138
import _mod16124 from "module_16124" /* 16124 */;
import _mod16139 from "module_16139" /* 16139 */;
import _mod16143 from "module_16143" /* 16143 */;
import _mod16146 from "module_16146" /* 16146 */;
import _mod16147 from "module_16147" /* 16147 */;
import prop from "module_16142" /* 16142 */;

let tmp2;
let closure_2 = _mod16139("wks");
const _Symbol = _mod16124.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16124.Symbol;
  const tmp3 = _Symbol.for || _mod16124.Symbol;
} else {
  tmp2 = _Symbol && _mod16124.Symbol.withoutSetter || _mod16146;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16147(closure_2, arg0)) {
    if (_mod16143) {
      let tmp6;
      const tmpResult = _mod16147;
      if (tmpResult(_mod16124.Symbol, arg0)) {
        tmp6 = tmp(16124).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
