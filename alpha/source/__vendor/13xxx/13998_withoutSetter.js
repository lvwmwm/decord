// Module ID: 13998
// Function ID: 13999
// Name: withoutSetter
// Dependencies: [13999, 14002, 13984, 14006, 14007, 14003]

// Module 13998 (withoutSetter)
import _mod13984 from "module_13984" /* 13984 */;
import _mod13999 from "module_13999" /* 13999 */;
import _mod14006 from "module_14006" /* 14006 */;
import _mod14007 from "module_14007" /* 14007 */;
import prop from "module_14002" /* 14002 */;

let closure_2 = _mod13999("wks");
let _Symbol = _mod13984.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13984.Symbol;
  const tmp2 = _Symbol.for || _mod13984.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13984.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14006;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14007(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14003)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14007);
    }
    _Symbol = tmp(13984).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
