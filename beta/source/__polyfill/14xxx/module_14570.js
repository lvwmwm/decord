// Module ID: 14570
// Function ID: 14571
// Dependencies: [14571, 14574, 14556, 14578, 14579, 14575]

// Module 14570
import _mod14556 from "module_14556" /* 14556 */;
import _mod14571 from "module_14571" /* 14571 */;
import _mod14575 from "module_14575" /* 14575 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14579 from "module_14579" /* 14579 */;
import prop from "module_14574" /* 14574 */;

let tmp2;
let closure_2 = _mod14571("wks");
const _Symbol = _mod14556.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14556.Symbol;
  const tmp3 = _Symbol.for || _mod14556.Symbol;
} else {
  tmp2 = _Symbol && _mod14556.Symbol.withoutSetter || _mod14578;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14579(closure_2, arg0)) {
    if (_mod14575) {
      let tmp6;
      const tmpResult = _mod14579;
      if (tmpResult(_mod14556.Symbol, arg0)) {
        tmp6 = tmp(14556).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
