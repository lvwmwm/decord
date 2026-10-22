// Module ID: 15513
// Function ID: 15514
// Dependencies: [15514, 15517, 15499, 15521, 15522, 15518]

// Module 15513
import _mod15499 from "module_15499" /* 15499 */;
import _mod15514 from "module_15514" /* 15514 */;
import _mod15518 from "module_15518" /* 15518 */;
import _mod15521 from "module_15521" /* 15521 */;
import _mod15522 from "module_15522" /* 15522 */;
import prop from "module_15517" /* 15517 */;

let tmp2;
let closure_2 = _mod15514("wks");
const _Symbol = _mod15499.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod15499.Symbol;
  const tmp3 = _Symbol.for || _mod15499.Symbol;
} else {
  tmp2 = _Symbol && _mod15499.Symbol.withoutSetter || _mod15521;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod15522(closure_2, arg0)) {
    if (_mod15518) {
      let tmp6;
      const tmpResult = _mod15522;
      if (tmpResult(_mod15499.Symbol, arg0)) {
        tmp6 = tmp(15499).Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};
