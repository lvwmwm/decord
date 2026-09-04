// Module ID: 14237
// Function ID: 14238
// Name: withoutSetter
// Dependencies: [14238, 14241, 14223, 14245, 14246, 14242]

// Module 14237 (withoutSetter)
import _mod14223 from "module_14223" /* 14223 */;
import __core_js_shared__ from "__core-js_shared__" /* 14238 */;
import sum from "sum" /* 14245 */;
import call from "call" /* 14246 */;
import prop from "prop" /* 14241 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod14223.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14223.Symbol;
  const tmp2 = _Symbol.for || _mod14223.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14223.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14242)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14246);
    }
    _Symbol = tmp(14223).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
