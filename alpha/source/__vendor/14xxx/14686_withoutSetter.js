// Module ID: 14686
// Function ID: 14687
// Name: withoutSetter
// Dependencies: [14687, 14690, 14672, 14694, 14695, 14691]

// Module 14686 (withoutSetter)
import _mod14672 from "module_14672" /* 14672 */;
import _mod14687 from "module_14687" /* 14687 */;
import _mod14694 from "module_14694" /* 14694 */;
import _mod14695 from "module_14695" /* 14695 */;
import prop from "module_14690" /* 14690 */;

let closure_2 = _mod14687("wks");
let _Symbol = _mod14672.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14672.Symbol;
  const tmp2 = _Symbol.for || _mod14672.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14672.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14694;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14695(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14691)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14695);
    }
    _Symbol = tmp(14672).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
