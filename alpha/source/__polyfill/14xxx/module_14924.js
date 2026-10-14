// Module ID: 14924
// Function ID: 14925
// Dependencies: [14925, 14928, 14910, 14932, 14933, 14929]

// Module 14924
import _mod14910 from "module_14910" /* 14910 */;
import _mod14925 from "module_14925" /* 14925 */;
import _mod14929 from "module_14929" /* 14929 */;
import _mod14932 from "module_14932" /* 14932 */;
import _mod14933 from "module_14933" /* 14933 */;
import prop from "module_14928" /* 14928 */;

let tmp2;
let closure_2 = _mod14925("wks");
const _Symbol = _mod14910.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14910.Symbol;
  const tmp3 = _Symbol.for || _mod14910.Symbol;
} else {
  tmp2 = _Symbol && _mod14910.Symbol.withoutSetter || _mod14932;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14933(closure_2, arg0)) {
    if (_mod14929) {
      let tmp6;
      const tmpResult = _mod14933;
      if (tmpResult(_mod14910.Symbol, arg0)) {
        tmp6 = tmp(14910).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
