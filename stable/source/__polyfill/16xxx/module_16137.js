// Module ID: 16137
// Function ID: 16138
// Dependencies: [16138, 16141, 16123, 16145, 16146, 16142]

// Module 16137
import _mod16123 from "module_16123" /* 16123 */;
import _mod16138 from "module_16138" /* 16138 */;
import _mod16142 from "module_16142" /* 16142 */;
import _mod16145 from "module_16145" /* 16145 */;
import _mod16146 from "module_16146" /* 16146 */;
import prop from "module_16141" /* 16141 */;

let tmp2;
let closure_2 = _mod16138("wks");
const _Symbol = _mod16123.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16123.Symbol;
  const tmp3 = _Symbol.for || _mod16123.Symbol;
} else {
  tmp2 = _Symbol && _mod16123.Symbol.withoutSetter || _mod16145;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16146(closure_2, arg0)) {
    if (_mod16142) {
      let tmp6;
      const tmpResult = _mod16146;
      if (tmpResult(_mod16123.Symbol, arg0)) {
        tmp6 = tmp(16123).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
