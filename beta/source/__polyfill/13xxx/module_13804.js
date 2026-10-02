// Module ID: 13804
// Function ID: 13805
// Dependencies: [13805, 13808, 13790, 13812, 13813, 13809]

// Module 13804
import _mod13790 from "module_13790" /* 13790 */;
import _mod13805 from "module_13805" /* 13805 */;
import _mod13809 from "module_13809" /* 13809 */;
import _mod13812 from "module_13812" /* 13812 */;
import _mod13813 from "module_13813" /* 13813 */;
import prop from "module_13808" /* 13808 */;

let tmp2;
let closure_2 = _mod13805("wks");
const _Symbol = _mod13790.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod13790.Symbol;
  const tmp3 = _Symbol.for || _mod13790.Symbol;
} else {
  tmp2 = _Symbol && _mod13790.Symbol.withoutSetter || _mod13812;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod13813(closure_2, arg0)) {
    if (_mod13809) {
      let tmp6;
      const tmpResult = _mod13813;
      if (tmpResult(_mod13790.Symbol, arg0)) {
        tmp6 = tmp(13790).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
