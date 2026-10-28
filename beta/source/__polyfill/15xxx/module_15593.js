// Module ID: 15593
// Function ID: 15594
// Dependencies: [15594, 15597, 15579, 15601, 15602, 15598]

// Module 15593
import _mod15579 from "module_15579" /* 15579 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15598 from "module_15598" /* 15598 */;
import _mod15601 from "module_15601" /* 15601 */;
import _mod15602 from "module_15602" /* 15602 */;
import prop from "module_15597" /* 15597 */;

let tmp2;
let closure_2 = _mod15594("wks");
const _Symbol = _mod15579.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15579.Symbol;
  const tmp3 = _Symbol.for || _mod15579.Symbol;
} else {
  tmp2 = _Symbol && _mod15579.Symbol.withoutSetter || _mod15601;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15602(closure_2, arg0)) {
    if (_mod15598) {
      let tmp6;
      const tmpResult = _mod15602;
      if (tmpResult(_mod15579.Symbol, arg0)) {
        tmp6 = tmp(15579).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
