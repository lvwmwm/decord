// Module ID: 14073
// Function ID: 14074
// Dependencies: [14074, 14077, 14059, 14081, 14082, 14078]

// Module 14073
import _mod14059 from "module_14059" /* 14059 */;
import _mod14074 from "module_14074" /* 14074 */;
import _mod14078 from "module_14078" /* 14078 */;
import _mod14081 from "module_14081" /* 14081 */;
import _mod14082 from "module_14082" /* 14082 */;
import prop from "module_14077" /* 14077 */;

let tmp2;
let closure_2 = _mod14074("wks");
const _Symbol = _mod14059.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14059.Symbol;
  const tmp3 = _Symbol.for || _mod14059.Symbol;
} else {
  tmp2 = _Symbol && _mod14059.Symbol.withoutSetter || _mod14081;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14082(closure_2, arg0)) {
    if (_mod14078) {
      let tmp6;
      const tmpResult = _mod14082;
      if (tmpResult(_mod14059.Symbol, arg0)) {
        tmp6 = tmp(14059).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
