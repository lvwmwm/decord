// Module ID: 16763
// Function ID: 16764
// Dependencies: [16764, 16767, 16749, 16771, 16772, 16768]

// Module 16763
import _mod16749 from "module_16749" /* 16749 */;
import _mod16764 from "module_16764" /* 16764 */;
import _mod16768 from "module_16768" /* 16768 */;
import _mod16771 from "module_16771" /* 16771 */;
import _mod16772 from "module_16772" /* 16772 */;
import prop from "module_16767" /* 16767 */;

let tmp2;
let closure_2 = _mod16764("wks");
const _Symbol = _mod16749.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod16749.Symbol;
  const tmp3 = _Symbol.for || _mod16749.Symbol;
} else {
  tmp2 = _Symbol && _mod16749.Symbol.withoutSetter || _mod16771;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod16772(closure_2, arg0)) {
    if (_mod16768) {
      let tmp6;
      const tmpResult = _mod16772;
      if (tmpResult(_mod16749.Symbol, arg0)) {
        tmp6 = tmp(16749).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
