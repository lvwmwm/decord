// Module ID: 15821
// Function ID: 15822
// Dependencies: [15822, 15825, 15807, 15829, 15830, 15826]

// Module 15821
import _mod15807 from "module_15807" /* 15807 */;
import _mod15822 from "module_15822" /* 15822 */;
import _mod15826 from "module_15826" /* 15826 */;
import _mod15829 from "module_15829" /* 15829 */;
import _mod15830 from "module_15830" /* 15830 */;
import prop from "module_15825" /* 15825 */;

let tmp2;
let closure_2 = _mod15822("wks");
const _Symbol = _mod15807.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15807.Symbol;
  const tmp3 = _Symbol.for || _mod15807.Symbol;
} else {
  tmp2 = _Symbol && _mod15807.Symbol.withoutSetter || _mod15829;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15830(closure_2, arg0)) {
    if (_mod15826) {
      let tmp6;
      const tmpResult = _mod15830;
      if (tmpResult(_mod15807.Symbol, arg0)) {
        tmp6 = tmp(15807).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
