// Module ID: 15456
// Function ID: 15457
// Dependencies: [15457, 15460, 15442, 15464, 15465, 15461]

// Module 15456
import _mod15442 from "module_15442" /* 15442 */;
import _mod15457 from "module_15457" /* 15457 */;
import _mod15461 from "module_15461" /* 15461 */;
import _mod15464 from "module_15464" /* 15464 */;
import _mod15465 from "module_15465" /* 15465 */;
import prop from "module_15460" /* 15460 */;

let tmp2;
let closure_2 = _mod15457("wks");
const _Symbol = _mod15442.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15442.Symbol;
  const tmp3 = _Symbol.for || _mod15442.Symbol;
} else {
  tmp2 = _Symbol && _mod15442.Symbol.withoutSetter || _mod15464;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15465(closure_2, arg0)) {
    if (_mod15461) {
      let tmp6;
      const tmpResult = _mod15465;
      if (tmpResult(_mod15442.Symbol, arg0)) {
        tmp6 = tmp(15442).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
