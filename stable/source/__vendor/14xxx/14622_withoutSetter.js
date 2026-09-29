// Module ID: 14622
// Function ID: 14623
// Name: withoutSetter
// Dependencies: [14623, 14626, 14608, 14630, 14631, 14627]

// Module 14622 (withoutSetter)
import _mod14608 from "module_14608" /* 14608 */;
import _mod14623 from "module_14623" /* 14623 */;
import _mod14630 from "module_14630" /* 14630 */;
import _mod14631 from "module_14631" /* 14631 */;
import prop from "module_14626" /* 14626 */;

let closure_2 = _mod14623("wks");
let _Symbol = _mod14608.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14608.Symbol;
  const tmp2 = _Symbol.for || _mod14608.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14608.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14630;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14631(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14627)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14631);
    }
    _Symbol = tmp(14608).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
