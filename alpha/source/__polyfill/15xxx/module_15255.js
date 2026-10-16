// Module ID: 15255
// Function ID: 15256
// Dependencies: [15256, 15259, 15241, 15263, 15264, 15260]

// Module 15255
import _mod15241 from "module_15241" /* 15241 */;
import _mod15256 from "module_15256" /* 15256 */;
import _mod15260 from "module_15260" /* 15260 */;
import _mod15263 from "module_15263" /* 15263 */;
import _mod15264 from "module_15264" /* 15264 */;
import prop from "module_15259" /* 15259 */;

let tmp2;
let closure_2 = _mod15256("wks");
const _Symbol = _mod15241.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15241.Symbol;
  const tmp3 = _Symbol.for || _mod15241.Symbol;
} else {
  tmp2 = _Symbol && _mod15241.Symbol.withoutSetter || _mod15263;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15264(closure_2, arg0)) {
    if (_mod15260) {
      let tmp6;
      const tmpResult = _mod15264;
      if (tmpResult(_mod15241.Symbol, arg0)) {
        tmp6 = tmp(15241).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
