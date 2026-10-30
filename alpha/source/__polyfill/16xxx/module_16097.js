// Module ID: 16097
// Function ID: 16098
// Dependencies: [16098, 16101, 16083, 16105, 16106, 16102]

// Module 16097
import _mod16083 from "module_16083" /* 16083 */;
import _mod16098 from "module_16098" /* 16098 */;
import _mod16102 from "module_16102" /* 16102 */;
import _mod16105 from "module_16105" /* 16105 */;
import _mod16106 from "module_16106" /* 16106 */;
import prop from "module_16101" /* 16101 */;

let tmp2;
let closure_2 = _mod16098("wks");
const _Symbol = _mod16083.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16083.Symbol;
  const tmp3 = _Symbol.for || _mod16083.Symbol;
} else {
  tmp2 = _Symbol && _mod16083.Symbol.withoutSetter || _mod16105;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16106(closure_2, arg0)) {
    if (_mod16102) {
      let tmp6;
      const tmpResult = _mod16106;
      if (tmpResult(_mod16083.Symbol, arg0)) {
        tmp6 = tmp(16083).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
