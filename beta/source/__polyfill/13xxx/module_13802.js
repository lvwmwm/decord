// Module ID: 13802
// Function ID: 13803
// Dependencies: [13803, 13806, 13788, 13810, 13811, 13807]

// Module 13802
import _mod13788 from "module_13788" /* 13788 */;
import _mod13803 from "module_13803" /* 13803 */;
import _mod13807 from "module_13807" /* 13807 */;
import _mod13810 from "module_13810" /* 13810 */;
import _mod13811 from "module_13811" /* 13811 */;
import prop from "module_13806" /* 13806 */;

let tmp2;
let closure_2 = _mod13803("wks");
const _Symbol = _mod13788.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod13788.Symbol;
  const tmp3 = _Symbol.for || _mod13788.Symbol;
} else {
  tmp2 = _Symbol && _mod13788.Symbol.withoutSetter || _mod13810;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod13811(closure_2, arg0)) {
    if (_mod13807) {
      let tmp6;
      const tmpResult = _mod13811;
      if (tmpResult(_mod13788.Symbol, arg0)) {
        tmp6 = tmp(13788).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
