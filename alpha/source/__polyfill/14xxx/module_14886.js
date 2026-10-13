// Module ID: 14886
// Function ID: 14887
// Dependencies: [14887, 14890, 14872, 14894, 14895, 14891]

// Module 14886
import _mod14872 from "module_14872" /* 14872 */;
import _mod14887 from "module_14887" /* 14887 */;
import _mod14891 from "module_14891" /* 14891 */;
import _mod14894 from "module_14894" /* 14894 */;
import _mod14895 from "module_14895" /* 14895 */;
import prop from "module_14890" /* 14890 */;

let tmp2;
let closure_2 = _mod14887("wks");
const _Symbol = _mod14872.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14872.Symbol;
  const tmp3 = _Symbol.for || _mod14872.Symbol;
} else {
  tmp2 = _Symbol && _mod14872.Symbol.withoutSetter || _mod14894;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14895(closure_2, arg0)) {
    if (_mod14891) {
      let tmp6;
      const tmpResult = _mod14895;
      if (tmpResult(_mod14872.Symbol, arg0)) {
        tmp6 = tmp(14872).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
