// Module ID: 14632
// Function ID: 14633
// Name: withoutSetter
// Dependencies: [14633, 14636, 14618, 14640, 14641, 14637]

// Module 14632 (withoutSetter)
import _mod14618 from "module_14618" /* 14618 */;
import _mod14633 from "module_14633" /* 14633 */;
import _mod14640 from "module_14640" /* 14640 */;
import _mod14641 from "module_14641" /* 14641 */;
import prop from "module_14636" /* 14636 */;

let closure_2 = _mod14633("wks");
let _Symbol = _mod14618.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14618.Symbol;
  const tmp2 = _Symbol.for || _mod14618.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14618.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14640;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14641(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14637)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14641);
    }
    _Symbol = tmp(14618).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
