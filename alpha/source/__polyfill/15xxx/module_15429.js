// Module ID: 15429
// Function ID: 15430
// Dependencies: [15430, 15433, 15415, 15437, 15438, 15434]

// Module 15429
import _mod15415 from "module_15415" /* 15415 */;
import _mod15430 from "module_15430" /* 15430 */;
import _mod15434 from "module_15434" /* 15434 */;
import _mod15437 from "module_15437" /* 15437 */;
import _mod15438 from "module_15438" /* 15438 */;
import prop from "module_15433" /* 15433 */;

let tmp2;
let closure_2 = _mod15430("wks");
const _Symbol = _mod15415.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15415.Symbol;
  const tmp3 = _Symbol.for || _mod15415.Symbol;
} else {
  tmp2 = _Symbol && _mod15415.Symbol.withoutSetter || _mod15437;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15438(closure_2, arg0)) {
    if (_mod15434) {
      let tmp6;
      const tmpResult = _mod15438;
      if (tmpResult(_mod15415.Symbol, arg0)) {
        tmp6 = tmp(15415).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
